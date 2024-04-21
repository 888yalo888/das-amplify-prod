/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVibe = /* GraphQL */ `
  mutation CreateVibe(
    $input: CreateVibeInput!
    $condition: ModelVibeConditionInput
  ) {
    createVibe(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      vibeSiteId
      __typename
    }
  }
`;
export const updateVibe = /* GraphQL */ `
  mutation UpdateVibe(
    $input: UpdateVibeInput!
    $condition: ModelVibeConditionInput
  ) {
    updateVibe(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      vibeSiteId
      __typename
    }
  }
`;
export const deleteVibe = /* GraphQL */ `
  mutation DeleteVibe(
    $input: DeleteVibeInput!
    $condition: ModelVibeConditionInput
  ) {
    deleteVibe(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      vibeSiteId
      __typename
    }
  }
`;
export const createYouth = /* GraphQL */ `
  mutation CreateYouth(
    $input: CreateYouthInput!
    $condition: ModelYouthConditionInput
  ) {
    createYouth(input: $input, condition: $condition) {
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
        __typename
      }
      vibes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateYouth = /* GraphQL */ `
  mutation UpdateYouth(
    $input: UpdateYouthInput!
    $condition: ModelYouthConditionInput
  ) {
    updateYouth(input: $input, condition: $condition) {
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
        __typename
      }
      vibes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteYouth = /* GraphQL */ `
  mutation DeleteYouth(
    $input: DeleteYouthInput!
    $condition: ModelYouthConditionInput
  ) {
    deleteYouth(input: $input, condition: $condition) {
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
        __typename
      }
      vibes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProgramManager = /* GraphQL */ `
  mutation CreateProgramManager(
    $input: CreateProgramManagerInput!
    $condition: ModelProgramManagerConditionInput
  ) {
    createProgramManager(input: $input, condition: $condition) {
      id
      fullName
      createdDate
      email
      status
      AssignedTo {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgramManager = /* GraphQL */ `
  mutation UpdateProgramManager(
    $input: UpdateProgramManagerInput!
    $condition: ModelProgramManagerConditionInput
  ) {
    updateProgramManager(input: $input, condition: $condition) {
      id
      fullName
      createdDate
      email
      status
      AssignedTo {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgramManager = /* GraphQL */ `
  mutation DeleteProgramManager(
    $input: DeleteProgramManagerInput!
    $condition: ModelProgramManagerConditionInput
  ) {
    deleteProgramManager(input: $input, condition: $condition) {
      id
      fullName
      createdDate
      email
      status
      AssignedTo {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
        __typename
      }
      AttendedBy {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
        __typename
      }
      AttendedBy {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
        __typename
      }
      AttendedBy {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createYouthSite = /* GraphQL */ `
  mutation CreateYouthSite(
    $input: CreateYouthSiteInput!
    $condition: ModelYouthSiteConditionInput
  ) {
    createYouthSite(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateYouthSite = /* GraphQL */ `
  mutation UpdateYouthSite(
    $input: UpdateYouthSiteInput!
    $condition: ModelYouthSiteConditionInput
  ) {
    updateYouthSite(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteYouthSite = /* GraphQL */ `
  mutation DeleteYouthSite(
    $input: DeleteYouthSiteInput!
    $condition: ModelYouthSiteConditionInput
  ) {
    deleteYouthSite(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProgramManagerSite = /* GraphQL */ `
  mutation CreateProgramManagerSite(
    $input: CreateProgramManagerSiteInput!
    $condition: ModelProgramManagerSiteConditionInput
  ) {
    createProgramManagerSite(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgramManagerSite = /* GraphQL */ `
  mutation UpdateProgramManagerSite(
    $input: UpdateProgramManagerSiteInput!
    $condition: ModelProgramManagerSiteConditionInput
  ) {
    updateProgramManagerSite(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgramManagerSite = /* GraphQL */ `
  mutation DeleteProgramManagerSite(
    $input: DeleteProgramManagerSiteInput!
    $condition: ModelProgramManagerSiteConditionInput
  ) {
    deleteProgramManagerSite(input: $input, condition: $condition) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
