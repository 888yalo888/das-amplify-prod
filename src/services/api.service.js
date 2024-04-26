import { generateClient } from 'aws-amplify/api';
import { updateSite, updateProgramManager } from '../graphql/mutations';
import { getYouth } from '../graphql/queries';
import { createVibe, updateVibe, getRosterById, getSitesByProgramManager, updateYouth, createYouth, createYouthSite } from '../graphql/customQueries';
import { EntityType } from '../enums/entity.enum';
import { EntityStatus } from '../enums/entity-status.enum';
import { getCurrentDateString, getCurrentDateWithOffset } from '../utils/date';

const client = generateClient();

export const getSite = async (siteId, activeOnly = true) => {
    const result = await client.graphql({
        query: getRosterById,
        variables: {
            id: siteId,
        },
    });
    const roster = result.data.getSite.AttendedBy.items.map((youthWrapper) => {
        youthWrapper.youth.vibes = youthWrapper.youth.vibes.items;
        youthWrapper.youth.site = youthWrapper.youth.site.items.map((site) => site.id);
        return youthWrapper.youth;
    });
    return {
        id: result.data.getSite.id,
        address: result.data.getSite.address,
        name: result.data.getSite.name,
        phoneNumber: result.data.getSite.phoneNumber,
        roster: activeOnly ? roster.filter((youth) => youth.status === EntityStatus.Active) : roster,
        siteAdminEmail: result.data.getSite.siteAdminEmail,
        siteAdminName: result.data.getSite.siteAdminName,
    };
};

export const getProgramManager = async (email) => {
    const result = await client.graphql({
        query: getSitesByProgramManager,
        variables: {
            email,
        },
    });
    return {
        id: result.data.listProgramManagers.items[0].id,
        fullName: result.data.listProgramManagers.items[0].fullName,
        sites: result.data.listProgramManagers.items[0].AssignedTo.items.map((siteWrapper) => siteWrapper.site),
    };
};

export const getYouthInfo = async (id) => {
    const result = await client.graphql({
        query: getYouth,
        variables: {
            id,
        },
    });
    return result.data.getYouth;
}

export const checkInYouth = async (siteID, youthID, vibe) => {
    await client.graphql({
        query: createVibe,
        variables: {
            input: {
                checkInTime: getCurrentDateWithOffset(),
                checkInVibe: vibe,
                vibeSiteId: siteID,
                youthID,
            },
        },
    });
};

export const checkOutYouth = async (vibeID, vibe) => {
    await client.graphql({
        query: updateVibe,
        variables: {
            input: {
                id: vibeID,
                checkOutTime: new Date(),
                checkOutVibe: vibe,
            },
        },
    });
};

export const addYouths = async (youthDataArr, site) => {
    const results = await Promise.allSettled(youthDataArr.map(async (youthData) => {
        const createYouthResult = await client.graphql({
            query: createYouth,
            variables: {
                input: {
                    ...youthData,
                },
            },
        });
        return client.graphql({
            query: createYouthSite,
            variables: {
                input: {
                    siteId: site,
                    youthId: createYouthResult.data.createYouth.id,
                },
            },
        });
    }));

    return {
        successfulResults: results.filter((result) => result.status === 'fulfilled').map((result) => result.value),
        failures: results.filter((result) => result.status === 'rejected').map((result) => result.reason),
    };
};

const updateYouthInfo = async (updatedFields) => {
    await client.graphql({
        query: updateYouth,
        variables: {
            input: {
                ...updatedFields,
            },
        },
    });
};

const updateSiteInfo = async (updatedFields) => {
    await client.graphql({
        query: updateSite,
        variables: {
            input: {
                ...updatedFields
            },
        },
    });
};

const updateProgramManagerInfo = async (updatedFields) => {
    await client.graphql({
        query: updateProgramManager,
        variables: {
            input: {
                ...updatedFields
            },
        },
    });
};

export const updateItem = async (entityType, updatedFields) => {
    switch (entityType) {
        case EntityType.Youth: {
            await updateYouthInfo(updatedFields);
            break;
        }
        case EntityType.Site: {
            await updateSiteInfo(updatedFields);
            break;
        }
        case EntityType.ProgramManager: {
            await updateProgramManagerInfo(updatedFields);
            break;
        }
        default: {
            throw new Error(`Unsupported entity type: ${entityType}`);
        }
    }
};

export const archiveYouth = async (youthId) => {
    await client.graphql({
        query: updateYouth,
        variables: {
            input: {
                id: youthId,
                status: EntityStatus.Archived,
            },
        },
    });
};