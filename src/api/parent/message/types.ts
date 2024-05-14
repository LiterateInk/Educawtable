import { ApiPagination } from "~/constants/types/pagination";

export interface ApiMessagesRes {
  /** Success status */
  success: boolean;
  /** Data */
  data: Array<{
    /** Message ID */
    id: string;
    /** Message title */
    title: string;
    /** Message body */
    body: string;
    /** Message type */
    type: string;
    /** Message color */
    color?: string;
    /** Message is a template */
    template: boolean;
    /** User ID for the writer */
    user_id: number;
    scope_model: string;
    scope_key: number;
    subject_id?: number;
    recurrence: string;
    events_count: number;
    /** Number of likes */
    likes_count: number;
    /** Commentable permission */
    commentable: boolean;
    /** Date of the creation of the message */
    created: string;
    /** Date of the last modification of the message */
    modified: string;
    /** Achievement ID of the message */
    achievement: string;
    /** Message is archived (TODO: bool ?) */
    archived: any;
    /** Date when the message is visible */
    visibility: string;
    /** Pupil is present */
    pupil_present?: boolean;
    /** Date of the deadline */
    date: string;
    /** Number of likes (TODO: duplicate with likes_count ?) */
    liked: number;
    checked?: number;
    other_form_answers_count: {};
    /** Icon of the message */
    icon: string;
    /** Links in the message */
    links: Array<string>;
    games: Array<{
      id: string;
      linkId: string;
      kidiquest: boolean;
    }>;
    revisions: Array<{
      uid: string;
      title: string;
      type: string;
      kidiquest: boolean;
      content: {
        items: Array<string>;
      };
      templates: Array<{
        code: string;
        settings: Array<any>;
      }>;
    }>;
    /** Survey in the message */
    survey?: {
      deadline: string;
      /** Responses are anonymized */
      anonymous: boolean;
      /** Survey is unique by pupil */
      uniqByPupil: boolean;
      content: Array<{
        value: string;
        type: string;
        label: string;
        options: Array<{
          value: string;
          label: string;
        }>;
        /** Multiple responses are allowed */
        multiple: boolean;
      }>;
    };
    bench: number;
    targetChildren: any;
    events: Array<{
      id: string;
      homework_message_id: string;
      scope_key: number;
      scope_model: string;
      start: string;
      stop: any;
      duration: number;
      status: any;
      location: any;
    }>;
    user: {
      id: number;
      name: string;
      firstname: string;
      lang?: string;
      allow_translation?: boolean;
    };
    achievements: Array<{
      id: number;
      action: string;
      modified: string;
      homework_message_id: string;
      subject_key: number;
      subject_model: string;
      user_id: number;
    }>;
    recipients: Array<{
      id: string;
      homework_message_id: string;
      key: number;
      model: string;
      type: string;
      checked: number;
      date: string;
      visible: string;
      created: string;
    }>;
    meetings: Array<any>;
    form_answers: Array<any>;
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
    subject: any;
    comments: Array<any>;
    pupils: Array<number>;
  }>;
  pagination: ApiPagination;
}

export interface ApiMessagesCheckRes {
  success: boolean;
  data: Array<any>;
}

export interface ApiMessagesDeleteRes {
  success: boolean;
  data: {
    id?: string;
    name?: string;
    message?: string;
    url?: string;
    exception?: {
      class: string;
      code: number;
      message: string;
    };
  };
}

export interface ApiMessagesAchieveRes {
  success: boolean;
  data: Array<{
    id: number;
    action: string;
    modified: string;
    homework_message_id: string;
    subject_key: number;
    subject_model: string;
    user_id: number;
  }>;
}
