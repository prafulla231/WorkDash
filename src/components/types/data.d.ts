export interface ActivityMeta {
    label: string;
    fillColor: string;
  }
  
  export interface TotalActivity {
    name: string;
    value: string;
  }
  
  export interface DayWiseActivityItem {
    count: string;
    label: string;
    fillColor: string;
  }
  
  export interface DayWiseActivity {
    date: string;
    items: {
      children: DayWiseActivityItem[];
    };
  }
  
  export interface AuthorWorklog {
    name: string;
    totalActivity: TotalActivity[];
    dayWiseActivity: DayWiseActivity[];
  }
  
  export interface AuthorWorklogData {
    activityMeta: ActivityMeta[];
    rows: AuthorWorklog[];
  }
  
  export interface ApiResponse {
    data: {
      AuthorWorklog: AuthorWorklogData;
    };
  }
  