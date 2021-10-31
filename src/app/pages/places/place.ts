export interface Place {
    id: number,
    dashboard_id: number,
    name: string,
    ip: string,
    port: number,
    sensorCount: number,
    eqCount: number,
    alarmCount?:number,
    determinatedTemp: null,
    status_code: number,
    status_id: number,
    status_name: string
}