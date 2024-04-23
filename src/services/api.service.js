import { generateClient } from 'aws-amplify/api';
import { createYouth, createVibe, updateVibe, updateYouth, updateSite, updateProgramManager } from '../graphql/mutations';
import { getYouth } from '../graphql/queries';
import { getRosterById, getSitesByProgramManager } from '../graphql/customQueries';
import { EntityType } from '../enums/entity.enum';
import { EntityStatus } from '../enums/entity-status.enum';

const client = generateClient();

export const getSite = async (siteId) => {
    const result = await client.graphql({
        query: getRosterById,
        variables: {
            id: siteId,
        },
    });
    return {
        address: result.data.getSite.address,
        name: result.data.getSite.name,
        phoneNumber: result.data.getSite.phoneNumber,
        roster: result.data.getSite.AttendedBy.items.map((youthWrapper) => {
            youthWrapper.youth.vibes = youthWrapper.youth.vibes.items;
            return youthWrapper.youth;
        }).filter((youth) => youth.status === EntityStatus.Active),
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
                checkInTime: new Date(),
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

export const addYouths = async (youthDataArr) => {
    const results = await Promise.allSettled(youthDataArr.map((youthData) => {
        return client.graphql({
            query: createYouth,
            variables: {
                input: {
                    ...youthData,
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
    console.log('updatedFields', updatedFields);
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
