/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVibe = /* GraphQL */ `
  subscription OnCreateVibe($filter: ModelSubscriptionVibeFilterInput) {
    onCreateVibe(filter: $filter) {
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
export const onUpdateVibe = /* GraphQL */ `
  subscription OnUpdateVibe($filter: ModelSubscriptionVibeFilterInput) {
    onUpdateVibe(filter: $filter) {
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
export const onDeleteVibe = /* GraphQL */ `
  subscription OnDeleteVibe($filter: ModelSubscriptionVibeFilterInput) {
    onDeleteVibe(filter: $filter) {
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
export const onCreateYouth = /* GraphQL */ `
  subscription OnCreateYouth($filter: ModelSubscriptionYouthFilterInput) {
    onCreateYouth(filter: $filter) {
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
export const onUpdateYouth = /* GraphQL */ `
  subscription OnUpdateYouth($filter: ModelSubscriptionYouthFilterInput) {
    onUpdateYouth(filter: $filter) {
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
export const onDeleteYouth = /* GraphQL */ `
  subscription OnDeleteYouth($filter: ModelSubscriptionYouthFilterInput) {
    onDeleteYouth(filter: $filter) {
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
export const onCreateProgramManager = /* GraphQL */ `
  subscription OnCreateProgramManager(
    $filter: ModelSubscriptionProgramManagerFilterInput
  ) {
    onCreateProgramManager(filter: $filter) {
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
export const onUpdateProgramManager = /* GraphQL */ `
  subscription OnUpdateProgramManager(
    $filter: ModelSubscriptionProgramManagerFilterInput
  ) {
    onUpdateProgramManager(filter: $filter) {
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
export const onDeleteProgramManager = /* GraphQL */ `
  subscription OnDeleteProgramManager(
    $filter: ModelSubscriptionProgramManagerFilterInput
  ) {
    onDeleteProgramManager(filter: $filter) {
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
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite($filter: ModelSubscriptionSiteFilterInput) {
    onCreateSite(filter: $filter) {
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
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite($filter: ModelSubscriptionSiteFilterInput) {
    onUpdateSite(filter: $filter) {
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
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite($filter: ModelSubscriptionSiteFilterInput) {
    onDeleteSite(filter: $filter) {
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
export const onCreateYouthSite = /* GraphQL */ `
  subscription OnCreateYouthSite(
    $filter: ModelSubscriptionYouthSiteFilterInput
  ) {
    onCreateYouthSite(filter: $filter) {
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
export const onUpdateYouthSite = /* GraphQL */ `
  subscription OnUpdateYouthSite(
    $filter: ModelSubscriptionYouthSiteFilterInput
  ) {
    onUpdateYouthSite(filter: $filter) {
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
export const onDeleteYouthSite = /* GraphQL */ `
  subscription OnDeleteYouthSite(
    $filter: ModelSubscriptionYouthSiteFilterInput
  ) {
    onDeleteYouthSite(filter: $filter) {
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
export const onCreateProgramManagerSite = /* GraphQL */ `
  subscription OnCreateProgramManagerSite(
    $filter: ModelSubscriptionProgramManagerSiteFilterInput
  ) {
    onCreateProgramManagerSite(filter: $filter) {
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
export const onUpdateProgramManagerSite = /* GraphQL */ `
  subscription OnUpdateProgramManagerSite(
    $filter: ModelSubscriptionProgramManagerSiteFilterInput
  ) {
    onUpdateProgramManagerSite(filter: $filter) {
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
export const onDeleteProgramManagerSite = /* GraphQL */ `
  subscription OnDeleteProgramManagerSite(
    $filter: ModelSubscriptionProgramManagerSiteFilterInput
  ) {
    onDeleteProgramManagerSite(filter: $filter) {
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
