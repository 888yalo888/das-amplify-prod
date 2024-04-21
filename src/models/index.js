// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Vibes = {
  "ATEASE": "ATEASE",
  "ANGRY": "ANGRY",
  "SAD": "SAD",
  "HAPPY": "HAPPY"
};

const Grade = {
  "KINDERGARTEN": "KINDERGARTEN",
  "FIRST": "FIRST",
  "SECOND": "SECOND",
  "THIRD": "THIRD",
  "FOURTH": "FOURTH",
  "FIFTH": "FIFTH",
  "SIXTH": "SIXTH",
  "SEVENTH": "SEVENTH",
  "EIGHTH": "EIGHTH",
  "NINTH": "NINTH",
  "TENTH": "TENTH",
  "ELEVENTH": "ELEVENTH",
  "TWELFTH": "TWELFTH"
};

const Status = {
  "ACTIVE": "ACTIVE",
  "ARCHIVED": "ARCHIVED"
};

const { Vibe, Youth, ProgramManager, Site, YouthSite, ProgramManagerSite } = initSchema(schema);

export {
  Vibe,
  Youth,
  ProgramManager,
  Site,
  YouthSite,
  ProgramManagerSite,
  Vibes,
  Grade,
  Status
};