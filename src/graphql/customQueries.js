import { getCurrentDate } from '../utils/date';

export const getRosterById = /* GraphQL */ `
  query GetRoster($id: ID!) {
    getSite(id: $id) {
      id
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
            guardianPhoneNumber
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
            site {
              items {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const getSitesByProgramManager = /* GraphQL */ `
  query GetSitesByProgramManager($email: String) {
    listProgramManagers (filter: {email: {eq: $email}}) {
        items {
            id
            fullName
            AssignedTo {
                items {
                    site {
                        name
                        id
                    }
                }
            }
        }
    }
  }
`;