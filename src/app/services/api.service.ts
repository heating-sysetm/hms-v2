import { map } from 'rxjs/operators';
import { HttpInterceptor, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders;
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.headers = new HttpHeaders();

  }


  getDashboard() {
    return this.http.get(`${environment.apiUrl}/dashboards/1`);
  }


  // Places APIes
  getAllPlaces() {
    return this.http.get(`${environment.apiUrl}/places/all`);
  }

  getPlace(id) {
    return this.http.get(`${environment.apiUrl}/places/${id}`);
  }

  getPlaceAlarmCount(id) {
    return this.http.get(`${environment.apiUrl}/places/${id}/count`);
  }


  getPlaceSensors(id){
    return this.http.get(`${environment.apiUrl}/places/${id}/sensors`);
  }
  getPlaceEquipments(id){
    return this.http.get(`${environment.apiUrl}/places/${id}/equipments`);
  }
  changePlaceTempratuer(id,temp){
    return this.http.put(`${environment.apiUrl}/places/${id}/change-temp`,{temp:temp});
  }


  addPlace(data) {
    return this.http.post(`${environment.apiUrl}/places/add-place`, data);
  }
  updatePlaceStatus(id, data) {
    return this.http.put(`${environment.apiUrl}/places/` + id + `/edit-place-status`, data);
  }

  updatePlace(id, data) {
    return this.http.put(`${environment.apiUrl}/places/` + id + `/edit-place`, data);
  }

  deletePlace(id) {
    return this.http.delete(`${environment.apiUrl}/places/` + id + `/delete-place`);
  }





  // Equipment Apies
  addEquipments(data) {
    return this.http.post(`${environment.apiUrl}/equipments/add-equipments`, data);
  }

  updateEquipment(id, data) {
    return this.http.put(`${environment.apiUrl}/equipments/${id}/edit-equipment`, data);
  }

  changeEqStatus(id, status) {
    return this.http.put(`${environment.apiUrl}/equipments/${id}/update-equipment-status`, status);
  }


  getEquipments() {
    return this.http.get(`${environment.apiUrl}/equipments/all`);
  }

  deleteEquipment(id) {
    return this.http.delete(`${environment.apiUrl}/equipments/` + id + `/delete-equipment`);
  }


  getEquipmentTypes() {
    return this.http.get(`${environment.apiUrl}/equipments/types/all`);
  }





  // Sensor Add 

  addSensors(data) {
    return this.http.post(`${environment.apiUrl}/sensors/add-sensors`, data);
  }

  getEquipmentSensors(id) {
    return this.http.get(`${environment.apiUrl}/sensors/${id}/all`);
  }


  deleteSensor(id) {
    return this.http.delete(`${environment.apiUrl}/sensors/${id}/delete-sensor`);
  }

  getSensors() {
    return this.http.get(`${environment.apiUrl}/sensors/all`);
  }
  updateSensor(id, data) {
    return this.http.put(`${environment.apiUrl}/sensors/${id}/edit-sensor`, data);
  }

  updateSensorStatus(id, data) {
    return this.http.put(`${environment.apiUrl}/sensors/${id}/update-sensor-status`, data);
  }

  getSensorTypes() {
    return this.http.get(`${environment.apiUrl}/sensors/sensor-types/all`);
  }



  // User APIes
  getUsers() {
    return this.http.get(`${environment.apiUrl}/users/all`);
  }

  changeUserStatus(id,status) {
    return this.http.put(`${environment.apiUrl}/users/${id}/update-user-status`,status);
  }

  changeUserPassword(id,data){
    return this.http.put(`${environment.apiUrl}/users/${id}/change-user-password`,data);
  }

  addUser(data) {
    return this.http.post(`${environment.apiUrl}/users/add-user`, data);
  }

  updateUser(id, data) {
    return this.http.put(`${environment.apiUrl}/users/` + id + `/edit-user`, { data });
  }

  deleteUser(id) {
    return this.http.delete(`${environment.apiUrl}/users/` + id + `/delete-user`);
  }


  //Alarms apies
  getAlarms() {
    return this.http.get(`${environment.apiUrl}/alarms/all`);
  }

  getPlaceActiveAlarms(id) {
    return this.http.get(`${environment.apiUrl}/alarms/${id}/active`);
  }

  addAlarm(data) {
    return this.http.post(`${environment.apiUrl}/alarms/add-alarm`, data);
  }

  deleteAlarm(id) {
    return this.http.delete(`${environment.apiUrl}/alarms/${id}/delete-alarm`);
  }

  changeAlarmStatus(id,status) {
    console.log(id,status);
    
    return this.http.put(`${environment.apiUrl}/alarms/${id}/edit-alarm-status`,status);
  }

  getOperations() {
    return this.http.get(`${environment.apiUrl}/alarms/operations/all`);
  }

  changeAlertStatus(id,status){
    return this.http.put(`${environment.apiUrl}/alarms/${id}/edit-alarm-status`,status);
  }


  //sensors  values

  getGasValues(start_date, end_date) {
    return this.http.post(`${environment.apiUrl}/Places/getGasValues`, { startDate: start_date, endDate: end_date });
  }

  getCisternValues(start_date, end_date) {
    return this.http.post(`${environment.apiUrl}/Places/getCisternValues`, { startDate: start_date, endDate: end_date });
  }

  getBoilersValues(start_date, end_date) {
    return this.http.post(`${environment.apiUrl}/Places/getBoylersValues`, { startDate: start_date, endDate: end_date });
  }

  getInOutValues(start_date, end_date) {
    return this.http.post(`${environment.apiUrl}/Places/getInOutValues`, { startDate: start_date, endDate: end_date });
  }

  // notifs 


  getNotifs() {
    return this.http.get(`${environment.apiUrl}/Places/unread_notifs`);
  }

  deactiveNotif(id) {
    return this.http.put(`${environment.apiUrl}/Places/logs/${id}/deactie_log`,{});
  }
  readNotif(id) {
    return this.http.put(`${environment.apiUrl}/Places/read_notif/` + id, {});
  }

}
