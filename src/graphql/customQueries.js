import { getCurrentDate } from '../utils/date';

export const createYouth = /* GraphQL */ `
  mutation CreateYouth($input: CreateYouthInput!) {
    createYouth(input: $input) {
      id
    }
  }
`;

export const createYouthSite = /* GraphQL */ `
  mutation CreateYouthSite($input: CreateYouthSiteInput!) {
    createYouthSite(input: $input) {
      id
    }
  }
`;

export const updateYouth = /* GraphQL */ `
  mutation UpdateYouth($input: UpdateYouthInput!) {
    updateYouth(input: $input) {
      id
      fullName
      dateOfBirth
      guardianFullName
      guardianPhoneNumber
      grade
      gender
      status
    }
  }
`;

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