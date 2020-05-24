import { PrefectureList } from './global';
declare namespace NodeJS {
    interface ProcessEnv {
      readonly API_KEY: string;
    }
}

export type Prefecture = {
  prefCode: number,
  prefName: string,
}