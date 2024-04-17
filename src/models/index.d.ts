import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Grade {
  KINDERGARTEN = "KINDERGARTEN",
  FIRST = "FIRST",
  SECOND = "SECOND",
  THIRD = "THIRD",
  FOURTH = "FOURTH",
  FIFTH = "FIFTH",
  SIXTH = "SIXTH",
  SEVENTH = "SEVENTH",
  EIGHTH = "EIGHTH",
  NINTH = "NINTH",
  TENTH = "TENTH",
  ELEVENTH = "ELEVENTH",
  TWELFTH = "TWELFTH"
}

export enum Status {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED"
}



type EagerVibe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vibe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly checkInVibe?: string | null;
  readonly checkOutVibe?: string | null;
  readonly checkInTime?: string | null;
  readonly checkOutTime?: string | null;
  readonly youthID: string;
  readonly site: Site;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vibeSiteId: string;
}

type LazyVibe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vibe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly checkInVibe?: string | null;
  readonly checkOutVibe?: string | null;
  readonly checkInTime?: string | null;
  readonly checkOutTime?: string | null;
  readonly youthID: string;
  readonly site: AsyncItem<Site>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vibeSiteId: string;
}

export declare type Vibe = LazyLoading extends LazyLoadingDisabled ? EagerVibe : LazyVibe

export declare const Vibe: (new (init: ModelInit<Vibe>) => Vibe) & {
  copyOf(source: Vibe, mutator: (draft: MutableModel<Vibe>) => MutableModel<Vibe> | void): Vibe;
}

type EagerYouth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Youth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly createdDate?: string | null;
  readonly dateOfBirth?: string | null;
  readonly guardianFullName?: string | null;
  readonly guardianPhoneNumber?: string | null;
  readonly grade?: Grade | keyof typeof Grade | null;
  readonly gender?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly site?: YouthSite[] | null;
  readonly vibes?: (Vibe | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyYouth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Youth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly createdDate?: string | null;
  readonly dateOfBirth?: string | null;
  readonly guardianFullName?: string | null;
  readonly guardianPhoneNumber?: string | null;
  readonly grade?: Grade | keyof typeof Grade | null;
  readonly gender?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly site: AsyncCollection<YouthSite>;
  readonly vibes: AsyncCollection<Vibe>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Youth = LazyLoading extends LazyLoadingDisabled ? EagerYouth : LazyYouth

export declare const Youth: (new (init: ModelInit<Youth>) => Youth) & {
  copyOf(source: Youth, mutator: (draft: MutableModel<Youth>) => MutableModel<Youth> | void): Youth;
}

type EagerProgramManager = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramManager, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly createdDate?: string | null;
  readonly email?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly AssignedTo?: (ProgramManagerSite | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramManager = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramManager, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly createdDate?: string | null;
  readonly email?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly AssignedTo: AsyncCollection<ProgramManagerSite>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgramManager = LazyLoading extends LazyLoadingDisabled ? EagerProgramManager : LazyProgramManager

export declare const ProgramManager: (new (init: ModelInit<ProgramManager>) => ProgramManager) & {
  copyOf(source: ProgramManager, mutator: (draft: MutableModel<ProgramManager>) => MutableModel<ProgramManager> | void): ProgramManager;
}

type EagerSite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Site, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdDate?: string | null;
  readonly address?: string | null;
  readonly phoneNumber?: string | null;
  readonly siteAdminName?: string | null;
  readonly siteAdminEmail?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly ManagedBy?: (ProgramManagerSite | null)[] | null;
  readonly AttendedBy?: (YouthSite | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Site, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdDate?: string | null;
  readonly address?: string | null;
  readonly phoneNumber?: string | null;
  readonly siteAdminName?: string | null;
  readonly siteAdminEmail?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly ManagedBy: AsyncCollection<ProgramManagerSite>;
  readonly AttendedBy: AsyncCollection<YouthSite>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Site = LazyLoading extends LazyLoadingDisabled ? EagerSite : LazySite

export declare const Site: (new (init: ModelInit<Site>) => Site) & {
  copyOf(source: Site, mutator: (draft: MutableModel<Site>) => MutableModel<Site> | void): Site;
}

type EagerYouthSite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<YouthSite, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly youthId?: string | null;
  readonly siteId?: string | null;
  readonly youth: Youth;
  readonly site: Site;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyYouthSite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<YouthSite, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly youthId?: string | null;
  readonly siteId?: string | null;
  readonly youth: AsyncItem<Youth>;
  readonly site: AsyncItem<Site>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type YouthSite = LazyLoading extends LazyLoadingDisabled ? EagerYouthSite : LazyYouthSite

export declare const YouthSite: (new (init: ModelInit<YouthSite>) => YouthSite) & {
  copyOf(source: YouthSite, mutator: (draft: MutableModel<YouthSite>) => MutableModel<YouthSite> | void): YouthSite;
}

type EagerProgramManagerSite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramManagerSite, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programManagerId?: string | null;
  readonly siteId?: string | null;
  readonly programManager: ProgramManager;
  readonly site: Site;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramManagerSite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramManagerSite, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programManagerId?: string | null;
  readonly siteId?: string | null;
  readonly programManager: AsyncItem<ProgramManager>;
  readonly site: AsyncItem<Site>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgramManagerSite = LazyLoading extends LazyLoadingDisabled ? EagerProgramManagerSite : LazyProgramManagerSite

export declare const ProgramManagerSite: (new (init: ModelInit<ProgramManagerSite>) => ProgramManagerSite) & {
  copyOf(source: ProgramManagerSite, mutator: (draft: MutableModel<ProgramManagerSite>) => MutableModel<ProgramManagerSite> | void): ProgramManagerSite;
}