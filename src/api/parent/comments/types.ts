import { ApiPagination } from "~/constants/types/pagination";

/** Use for classic conversation */
export interface ApiCommentsReadRes {
  success: boolean;
  data: Array<{
    id: number;
    parent_id?: number;
    user_id: number;
    body: string;
    modified: string;
    subject_model: string;
    subject_key: string;
    deleted: boolean;
    deleted_date: string;
    user: {
      id: number;
      name: string;
      firstname: string;
      lang?: string;
      allow_translation?: boolean;
    };
    medias: Array<{
      id: string;
      name: string;
      description: string;
      user_id: number;
      size: number;
      extension: string;
      type: string;
      people: any;
      published: any;
      width: any;
      height: any;
      reso: any;
      ratio: any;
      lat: any;
      lng: any;
    }>;
  }>;
  pagination: ApiPagination;
}

export interface ApiCommentsWriteRes {
  success: boolean;
  data: {
    id: number;
    parent_id: any;
    user_id: number;
    body: string;
    modified: string;
    subject_model: string;
    subject_key: string;
    user: {
      id: number;
      name: string;
      firstname: string;
    };
  };
}

export interface ApiCommentsDeleteRes {
  success: boolean;
  data: Array<any>;
}
