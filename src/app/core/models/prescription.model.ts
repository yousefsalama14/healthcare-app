export interface Prescription {
  id?: number;
  patientId: number;
  doctorId: number;
  medication: string;
  dosage: string;
  dateIssued: string;
}
