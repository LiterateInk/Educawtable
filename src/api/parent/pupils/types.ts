import { ApiPagination } from "~/constants/types/pagination";

export interface ApiParentPupilsRes {
  success: boolean;
  data: Array<{
    id: number;
    name: string;
    firstname: string;
    birthday: string;
    gender: string;
    grade_id: number;
    classroom_id: number;
    transfering: boolean;
    ine: any;
    fullname: string;
    writable: boolean;
    grade: {
      id: number;
      letters: string;
      name: string;
    };
    classroom: {
      id: number;
      name: string;
      school_id: number;
      release: boolean;
      teacher_name: string;
    };
    parents: Array<{
      id: number;
      name: string;
      firstname: string;
      mail: string;
      PupilsUser: {
        id: number;
        user_id: number;
        pupil_id: number;
        role: string;
      };
    }>;
    groups: Array<{
      id: number;
      name: string;
      PupilgroupsPupil: {
        id: number;
        pupil_id: number;
        pupilgroup_id: number;
      };
    }>;
  }>;
  pagination: ApiPagination;
}
