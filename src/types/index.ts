import {Theme} from '@react-navigation/native';

export type Navigation = {
  openDrawer(): void;
  goBack(): void;
  navigate: (scene: string, params?: {[key: string]: any}) => void;
};

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  user: UserProfile;
}
export interface APIResponse {
  success: boolean;
  message: string;
  data: any;
}

export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  roles: Record<string, any>[];
  permissions: string[];
}

export interface AppNavigatorProps {
  theme: Theme;
}

export interface SignInFormData {
  emailAddress: string;
  password: string;
}

export interface Props {
  navigation: Navigation;
}

export interface ResetPasswordFormData {
  emailAddress: string;
}

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

export interface UserDetailFormData {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  role: string;
}
export interface CarDetailFormData {
  host_id: number | null;
  selective_assign: number | null;
  name: string;
  license_plate: string;
  color: string;
  turo_id: string;
  notes: string;
}
export interface ManagerDetailFormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
}

export interface CleanerDetailFormData {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
}

export interface PropertyDetailFormData {
  id?: number;
  office_id: number;
  host_id: number | null;
  name: string;
  address_line_1: string;
  address_line_2: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
  beds: number;
  baths: number;
  accommodation_size: number;
  price: string;
  entrance_code: string;
  supply_closet_location: string;
  supply_closet_code: string;
  check_in_time: string;
  check_out_time: string;
  ical_url: string;
  notes: string;
  pets_allowed: boolean;
  laundry_needed: boolean;
  washer_dryer_on_site: boolean;
  start: string;
  recurring: string;
  square_feet: string;
  price_paying_cleaning: string;
  attachments: Record<string, any>[];
}
export interface UpdateProfileFormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
}

export interface UpdatePasswordFormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface Role {
  name: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  roles: Role[];
  createdDate: string;
  phone: string;
  rate: string;
  acct: string;
  registerDate: string;
  lastLoginDate: string;
  cancelDate: string;
  stripeId: string;
  payStatus: string;
}

export interface Cleaner {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  car_count: number;
  property_number: number;
}

export interface Host {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  cars_count?: number;
  properties_count?: number;
}

export interface Car {
  id: number;
  host_id: number;
  name: string;
  notes: string;
  host: Host;
  selective_assign: string;
  license_plate: string;
  turo_id: number;
  color: string;
  cleaner?: {
    id: number;
    cleaner_first_name: string;
    cleaner_last_name: string;
  };
}
export interface Role {
  id: number;
  name: string;
  users_count: number;
}

export interface Property {
  id: number;
  property_number: number;
  name: string;
  address: string;
  city: string;
  country: string;
  host: {id: number; first_name: string; last_name: string};
  office?: Record<string, any>;
  primary_cleaner: string;
  secondary_cleaner: string;
  state: string;
  zip_code: string;
}

export interface EventDetailedFormData {
  property_id: number | null;
  description: string;
  start: string;
  end: string;
  time: string;
  start_time: string;
  end_time: string;
  summary: string;
  cleaner_id: number | null;
  car_id: number | null;
  car_name: string;
  delivery_location: string;
  return_location: string;
  about_guest: string;
  first_name: string;
  last_name: string;
}
export interface JobDetailedFormData {
  id?: number;
  property_id: null | number;
  start: string;
  start_time: string;
  assigned_to: null | number;
  secondary_assigned_to: null | number;
  description: string;
  end: string;
  end_time: string;
  car_id: null | number;
  delivery_location: string;
  return_location: string;
  about_guest: string;
  first_name?: string;
  last_name?: string;
  car_name?: string;
  summary?: string;
}
export interface RoleOption {
  value: string;
  label: string;
}

export interface UpdateUserScreenProps {
  navigation: Navigation;
  route: any;
}
