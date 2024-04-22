/* eslint-disable */

import { getCurrentDate } from '../utils/date';

// query getRosterById($id:ID!) - gets roster with current date
export const getRosterById = /* GraphQL */ `
  query GetRoster($id: ID!) {
    getSite(id: $id) {
      address
      name
      phoneNumber
      siteAdminName
      siteAdminEmail
      AttendedBy(filter: {createdAt: {attributeExists: true}}) {
        items {
          youth {
            id
            createdAt
            dateOfBirth
            fullName
            grade
            gender
            guardianFullName
            status
            vibes(filter: {createdAt:{beginsWith:"${getCurrentDate()}"}}) {
              items {
                id
                checkInTime
                checkInVibe
                checkOutTime
                checkOutVibe
              }
            }
          }
        }
      }
    }
  }
`;

// query GetYouthRosterForSite($id: ID!) {
export const getYouthRosterForSite = /* GraphQL */ `
  query GetYouthRosterForSite($siteId: ID!, $date: String) {
    getSite(id: $siteId) {
      name
      AttendedBy(
        filter: {
          createdAt: { le: $date }
          _deleted: { attributeExists: false }
        }
      ) {
        items {
          youth {
            id
            createdAt
            createdDate
            dateOfBirth
            fullName
            gender
            grade
            guardianFullName
            guardianPhoneNumber
            status
            updatedAt
          }
        }
      }
    }
  }
`;

// this is an auto generated file. This will be overwritten

export const getVibe = /* GraphQL */ `
  query GetVibe($id: ID!) {
    getVibe(id: $id) {
      id
      checkInVibe
      checkOutVibe
      checkInTime
      checkOutTime
      youthID
      site {
        id
        name
        createdDate
        address
        phoneNumber
        siteAdminName
        siteAdminEmail
        status
        ManagedBy {
          items {
            id
            programManagerId
            siteId
            programManager {
              id
              fullName
              createdDate
              email
              status
              AssignedTo {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        AttendedBy {
          items {
            id
            youthId
            siteId
            youth {
              id
              fullName
              createdDate
              dateOfBirth
              guardianFullName
              guardianPhoneNumber
              grade
              gender
              status
              site {
                nextToken
                startedAt
                __typename
              }
              vibes {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vibeSiteId
      __typename
    }
  }
`;
export const listVibes = /* GraphQL */ `
  query ListVibes(
    $filter: ModelVibeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVibes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        checkInVibe
        checkOutVibe
        checkInTime
        checkOutTime
        youthID
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        vibeSiteId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVibes = /* GraphQL */ `
  query SyncVibes(
    $filter: ModelVibeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVibes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        checkInVibe
        checkOutVibe
        checkInTime
        checkOutTime
        youthID
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        vibeSiteId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const vibesByYouthID = /* GraphQL */ `
  query VibesByYouthID(
    $youthID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVibeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vibesByYouthID(
      youthID: $youthID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        checkInVibe
        checkOutVibe
        checkInTime
        checkOutTime
        youthID
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        vibeSiteId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getYouth = /* GraphQL */ `
  query GetYouth($id: ID!) {
    getYouth(id: $id) {
      id
      fullName
      createdDate
      dateOfBirth
      guardianFullName
      guardianPhoneNumber
      grade
      gender
      status
      site {
        items {
          id
          youthId
          siteId
          youth {
            id
            fullName
            createdDate
            dateOfBirth
            guardianFullName
            guardianPhoneNumber
            grade
            gender
            status
            site {
              items {
                id
                youthId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            vibes {
              items {
                id
                checkInVibe
                checkOutVibe
                checkInTime
                checkOutTime
                youthID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                vibeSiteId
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          site {
            id
            name
            createdDate
            address
            phoneNumber
            siteAdminName
            siteAdminEmail
            status
            ManagedBy {
              items {
                id
                programManagerId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            AttendedBy {
              items {
                id
                youthId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      vibes {
        items {
          id
          checkInVibe
          checkOutVibe
          checkInTime
          checkOutTime
          youthID
          site {
            id
            name
            createdDate
            address
            phoneNumber
            siteAdminName
            siteAdminEmail
            status
            ManagedBy {
              items {
                id
                programManagerId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            AttendedBy {
              items {
                id
                youthId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vibeSiteId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listYouths = /* GraphQL */ `
  query ListYouths(
    $filter: ModelYouthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYouths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        createdDate
        dateOfBirth
        guardianFullName
        guardianPhoneNumber
        grade
        gender
        status
        site {
          items {
            id
            youthId
            siteId
            youth {
              id
              fullName
              createdDate
              dateOfBirth
              guardianFullName
              guardianPhoneNumber
              grade
              gender
              status
              site {
                nextToken
                startedAt
                __typename
              }
              vibes {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vibes {
          items {
            id
            checkInVibe
            checkOutVibe
            checkInTime
            checkOutTime
            youthID
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            vibeSiteId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncYouths = /* GraphQL */ `
  query SyncYouths(
    $filter: ModelYouthFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncYouths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fullName
        createdDate
        dateOfBirth
        guardianFullName
        guardianPhoneNumber
        grade
        gender
        status
        site {
          items {
            id
            youthId
            siteId
            youth {
              id
              fullName
              createdDate
              dateOfBirth
              guardianFullName
              guardianPhoneNumber
              grade
              gender
              status
              site {
                nextToken
                startedAt
                __typename
              }
              vibes {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vibes {
          items {
            id
            checkInVibe
            checkOutVibe
            checkInTime
            checkOutTime
            youthID
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            vibeSiteId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProgramManager = /* GraphQL */ `
  query GetProgramManager($id: ID!) {
    getProgramManager(id: $id) {
      id
      fullName
      createdDate
      email
      status
      AssignedTo {
        items {
          id
          programManagerId
          siteId
          programManager {
            id
            fullName
            createdDate
            email
            status
            AssignedTo {
              items {
                id
                programManagerId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          site {
            id
            name
            createdDate
            address
            phoneNumber
            siteAdminName
            siteAdminEmail
            status
            ManagedBy {
              items {
                id
                programManagerId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            AttendedBy {
              items {
                id
                youthId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listProgramManagers = /* GraphQL */ `
  query ListProgramManagers(
    $filter: ModelProgramManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        createdDate
        email
        status
        AssignedTo {
          items {
            id
            programManagerId
            siteId
            programManager {
              id
              fullName
              createdDate
              email
              status
              AssignedTo {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProgramManagers = /* GraphQL */ `
  query SyncProgramManagers(
    $filter: ModelProgramManagerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgramManagers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fullName
        createdDate
        email
        status
        AssignedTo {
          items {
            id
            programManagerId
            siteId
            programManager {
              id
              fullName
              createdDate
              email
              status
              AssignedTo {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      id
      name
      createdDate
      address
      phoneNumber
      siteAdminName
      siteAdminEmail
      status
      ManagedBy {
        items {
          id
          programManagerId
          siteId
          programManager {
            id
            fullName
            createdDate
            email
            status
            AssignedTo {
              items {
                id
                programManagerId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          site {
            id
            name
            createdDate
            address
            phoneNumber
            siteAdminName
            siteAdminEmail
            status
            ManagedBy {
              items {
                id
                programManagerId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            AttendedBy {
              items {
                id
                youthId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      AttendedBy {
        items {
          id
          youthId
          siteId
          youth {
            id
            fullName
            createdDate
            dateOfBirth
            guardianFullName
            guardianPhoneNumber
            grade
            gender
            status
            site {
              items {
                id
                youthId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            vibes {
              items {
                id
                checkInVibe
                checkOutVibe
                checkInTime
                checkOutTime
                youthID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                vibeSiteId
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          site {
            id
            name
            createdDate
            address
            phoneNumber
            siteAdminName
            siteAdminEmail
            status
            ManagedBy {
              items {
                id
                programManagerId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            AttendedBy {
              items {
                id
                youthId
                siteId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdDate
        address
        phoneNumber
        siteAdminName
        siteAdminEmail
        status
        ManagedBy {
          items {
            id
            programManagerId
            siteId
            programManager {
              id
              fullName
              createdDate
              email
              status
              AssignedTo {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        AttendedBy {
          items {
            id
            youthId
            siteId
            youth {
              id
              fullName
              createdDate
              dateOfBirth
              guardianFullName
              guardianPhoneNumber
              grade
              gender
              status
              site {
                nextToken
                startedAt
                __typename
              }
              vibes {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSites = /* GraphQL */ `
  query SyncSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdDate
        address
        phoneNumber
        siteAdminName
        siteAdminEmail
        status
        ManagedBy {
          items {
            id
            programManagerId
            siteId
            programManager {
              id
              fullName
              createdDate
              email
              status
              AssignedTo {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        AttendedBy {
          items {
            id
            youthId
            siteId
            youth {
              id
              fullName
              createdDate
              dateOfBirth
              guardianFullName
              guardianPhoneNumber
              grade
              gender
              status
              site {
                nextToken
                startedAt
                __typename
              }
              vibes {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getYouthSite = /* GraphQL */ `
  query GetYouthSite($id: ID!) {
    getYouthSite(id: $id) {
      id
      youthId
      siteId
      youth {
        id
        fullName
        createdDate
        dateOfBirth
        guardianFullName
        guardianPhoneNumber
        grade
        gender
        status
        site {
          items {
            id
            youthId
            siteId
            youth {
              id
              fullName
              createdDate
              dateOfBirth
              guardianFullName
              guardianPhoneNumber
              grade
              gender
              status
              site {
                nextToken
                startedAt
                __typename
              }
              vibes {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vibes {
          items {
            id
            checkInVibe
            checkOutVibe
            checkInTime
            checkOutTime
            youthID
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            vibeSiteId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      site {
        id
        name
        createdDate
        address
        phoneNumber
        siteAdminName
        siteAdminEmail
        status
        ManagedBy {
          items {
            id
            programManagerId
            siteId
            programManager {
              id
              fullName
              createdDate
              email
              status
              AssignedTo {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        AttendedBy {
          items {
            id
            youthId
            siteId
            youth {
              id
              fullName
              createdDate
              dateOfBirth
              guardianFullName
              guardianPhoneNumber
              grade
              gender
              status
              site {
                nextToken
                startedAt
                __typename
              }
              vibes {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listYouthSites = /* GraphQL */ `
  query ListYouthSites(
    $filter: ModelYouthSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYouthSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        youthId
        siteId
        youth {
          id
          fullName
          createdDate
          dateOfBirth
          guardianFullName
          guardianPhoneNumber
          grade
          gender
          status
          site {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vibes {
            items {
              id
              checkInVibe
              checkOutVibe
              checkInTime
              checkOutTime
              youthID
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              vibeSiteId
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncYouthSites = /* GraphQL */ `
  query SyncYouthSites(
    $filter: ModelYouthSiteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncYouthSites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        youthId
        siteId
        youth {
          id
          fullName
          createdDate
          dateOfBirth
          guardianFullName
          guardianPhoneNumber
          grade
          gender
          status
          site {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vibes {
            items {
              id
              checkInVibe
              checkOutVibe
              checkInTime
              checkOutTime
              youthID
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              vibeSiteId
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const youthSitesByYouthId = /* GraphQL */ `
  query YouthSitesByYouthId(
    $youthId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelYouthSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    youthSitesByYouthId(
      youthId: $youthId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        youthId
        siteId
        youth {
          id
          fullName
          createdDate
          dateOfBirth
          guardianFullName
          guardianPhoneNumber
          grade
          gender
          status
          site {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vibes {
            items {
              id
              checkInVibe
              checkOutVibe
              checkInTime
              checkOutTime
              youthID
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              vibeSiteId
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const youthSitesBySiteId = /* GraphQL */ `
  query YouthSitesBySiteId(
    $siteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelYouthSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    youthSitesBySiteId(
      siteId: $siteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        youthId
        siteId
        youth {
          id
          fullName
          createdDate
          dateOfBirth
          guardianFullName
          guardianPhoneNumber
          grade
          gender
          status
          site {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vibes {
            items {
              id
              checkInVibe
              checkOutVibe
              checkInTime
              checkOutTime
              youthID
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              vibeSiteId
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProgramManagerSite = /* GraphQL */ `
  query GetProgramManagerSite($id: ID!) {
    getProgramManagerSite(id: $id) {
      id
      programManagerId
      siteId
      programManager {
        id
        fullName
        createdDate
        email
        status
        AssignedTo {
          items {
            id
            programManagerId
            siteId
            programManager {
              id
              fullName
              createdDate
              email
              status
              AssignedTo {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      site {
        id
        name
        createdDate
        address
        phoneNumber
        siteAdminName
        siteAdminEmail
        status
        ManagedBy {
          items {
            id
            programManagerId
            siteId
            programManager {
              id
              fullName
              createdDate
              email
              status
              AssignedTo {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        AttendedBy {
          items {
            id
            youthId
            siteId
            youth {
              id
              fullName
              createdDate
              dateOfBirth
              guardianFullName
              guardianPhoneNumber
              grade
              gender
              status
              site {
                nextToken
                startedAt
                __typename
              }
              vibes {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            site {
              id
              name
              createdDate
              address
              phoneNumber
              siteAdminName
              siteAdminEmail
              status
              ManagedBy {
                nextToken
                startedAt
                __typename
              }
              AttendedBy {
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listProgramManagerSites = /* GraphQL */ `
  query ListProgramManagerSites(
    $filter: ModelProgramManagerSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramManagerSites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programManagerId
        siteId
        programManager {
          id
          fullName
          createdDate
          email
          status
          AssignedTo {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProgramManagerSites = /* GraphQL */ `
  query SyncProgramManagerSites(
    $filter: ModelProgramManagerSiteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgramManagerSites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        programManagerId
        siteId
        programManager {
          id
          fullName
          createdDate
          email
          status
          AssignedTo {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const programManagerSitesByProgramManagerId = /* GraphQL */ `
  query ProgramManagerSitesByProgramManagerId(
    $programManagerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramManagerSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programManagerSitesByProgramManagerId(
      programManagerId: $programManagerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programManagerId
        siteId
        programManager {
          id
          fullName
          createdDate
          email
          status
          AssignedTo {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const programManagerSitesBySiteId = /* GraphQL */ `
  query ProgramManagerSitesBySiteId(
    $siteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramManagerSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programManagerSitesBySiteId(
      siteId: $siteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programManagerId
        siteId
        programManager {
          id
          fullName
          createdDate
          email
          status
          AssignedTo {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        site {
          id
          name
          createdDate
          address
          phoneNumber
          siteAdminName
          siteAdminEmail
          status
          ManagedBy {
            items {
              id
              programManagerId
              siteId
              programManager {
                id
                fullName
                createdDate
                email
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          AttendedBy {
            items {
              id
              youthId
              siteId
              youth {
                id
                fullName
                createdDate
                dateOfBirth
                guardianFullName
                guardianPhoneNumber
                grade
                gender
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              site {
                id
                name
                createdDate
                address
                phoneNumber
                siteAdminName
                siteAdminEmail
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
