export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      clinical_encounters: {
        Row: {
          created_at: string
          data_source: string
          doctor_id: string | null
          encounter_date: string
          fhir_bundle: Json
          id: string
          patient_id: string
          risk_level: string | null
        }
        Insert: {
          created_at?: string
          data_source: string
          doctor_id?: string | null
          encounter_date?: string
          fhir_bundle?: Json
          id?: string
          patient_id: string
          risk_level?: string | null
        }
        Update: {
          created_at?: string
          data_source?: string
          doctor_id?: string | null
          encounter_date?: string
          fhir_bundle?: Json
          id?: string
          patient_id?: string
          risk_level?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clinical_encounters_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clinical_encounters_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      hospitalizations: {
        Row: {
          admission_date: string
          attending_vet_id: string | null
          cage_number: string
          created_at: string
          current_status: string
          discharge_date: string | null
          id: string
          next_medication_time: string | null
          patient_id: string
          treatment_notes: string | null
          updated_at: string
        }
        Insert: {
          admission_date?: string
          attending_vet_id?: string | null
          cage_number: string
          created_at?: string
          current_status?: string
          discharge_date?: string | null
          id?: string
          next_medication_time?: string | null
          patient_id: string
          treatment_notes?: string | null
          updated_at?: string
        }
        Update: {
          admission_date?: string
          attending_vet_id?: string | null
          cage_number?: string
          created_at?: string
          current_status?: string
          discharge_date?: string | null
          id?: string
          next_medication_time?: string | null
          patient_id?: string
          treatment_notes?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hospitalizations_attending_vet_id_fkey"
            columns: ["attending_vet_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hospitalizations_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      iot_devices: {
        Row: {
          created_at: string
          current_value: number | null
          device_type: string
          id: string
          metadata: Json | null
          name: string
          status: string
          target_value: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_value?: number | null
          device_type: string
          id?: string
          metadata?: Json | null
          name: string
          status: string
          target_value?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_value?: number | null
          device_type?: string
          id?: string
          metadata?: Json | null
          name?: string
          status?: string
          target_value?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      kit_inscriptions: {
        Row: {
          acceptance_act_accepted: boolean | null
          address: string
          cif: string
          city: string
          clinic_name: string
          communications_accepted: boolean | null
          contact_email: string
          contact_name: string
          contact_phone: string
          contact_role: string
          contract_accepted: boolean | null
          contract_accepted_at: string | null
          created_at: string | null
          current_software: string | null
          email: string
          has_digital_records: string | null
          has_website: boolean | null
          id: string
          interested_modules: Json | null
          num_employees: number | null
          num_veterinarians: number | null
          phone: string
          postal_code: string
          privacy_accepted: boolean
          province: string
          status: string | null
          terms_accepted: boolean
          updated_at: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          acceptance_act_accepted?: boolean | null
          address: string
          cif: string
          city: string
          clinic_name: string
          communications_accepted?: boolean | null
          contact_email: string
          contact_name: string
          contact_phone: string
          contact_role: string
          contract_accepted?: boolean | null
          contract_accepted_at?: string | null
          created_at?: string | null
          current_software?: string | null
          email: string
          has_digital_records?: string | null
          has_website?: boolean | null
          id?: string
          interested_modules?: Json | null
          num_employees?: number | null
          num_veterinarians?: number | null
          phone: string
          postal_code: string
          privacy_accepted?: boolean
          province: string
          status?: string | null
          terms_accepted?: boolean
          updated_at?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          acceptance_act_accepted?: boolean | null
          address?: string
          cif?: string
          city?: string
          clinic_name?: string
          communications_accepted?: boolean | null
          contact_email?: string
          contact_name?: string
          contact_phone?: string
          contact_role?: string
          contract_accepted?: boolean | null
          contract_accepted_at?: string | null
          created_at?: string | null
          current_software?: string | null
          email?: string
          has_digital_records?: string | null
          has_website?: boolean | null
          id?: string
          interested_modules?: Json | null
          num_employees?: number | null
          num_veterinarians?: number | null
          phone?: string
          postal_code?: string
          privacy_accepted?: boolean
          province?: string
          status?: string | null
          terms_accepted?: boolean
          updated_at?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      lab_orders: {
        Row: {
          created_at: string
          dpp_payload: Json
          id: string
          lab_tech_id: string | null
          patient_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          dpp_payload?: Json
          id?: string
          lab_tech_id?: string | null
          patient_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          dpp_payload?: Json
          id?: string
          lab_tech_id?: string | null
          patient_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lab_orders_lab_tech_id_fkey"
            columns: ["lab_tech_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lab_orders_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          breed: string | null
          created_at: string
          created_by: string | null
          date_of_birth: string | null
          did: string
          full_name: string
          guardian_id: string | null
          id: string
          is_neutered: boolean | null
          microchip_id: string | null
          photo_url: string | null
          sex: string | null
          species: string | null
          updated_at: string
          wallet_status: Json | null
        }
        Insert: {
          breed?: string | null
          created_at?: string
          created_by?: string | null
          date_of_birth?: string | null
          did: string
          full_name: string
          guardian_id?: string | null
          id?: string
          is_neutered?: boolean | null
          microchip_id?: string | null
          photo_url?: string | null
          sex?: string | null
          species?: string | null
          updated_at?: string
          wallet_status?: Json | null
        }
        Update: {
          breed?: string | null
          created_at?: string
          created_by?: string | null
          date_of_birth?: string | null
          did?: string
          full_name?: string
          guardian_id?: string | null
          id?: string
          is_neutered?: boolean | null
          microchip_id?: string | null
          photo_url?: string | null
          sex?: string | null
          species?: string | null
          updated_at?: string
          wallet_status?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "patients_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "patients_guardian_id_fkey"
            columns: ["guardian_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name: string
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      smart_claims: {
        Row: {
          amount: number
          created_at: string
          evidence_url: string | null
          id: string
          patient_id: string
          status: string
          treatment_code: string
        }
        Insert: {
          amount: number
          created_at?: string
          evidence_url?: string | null
          id?: string
          patient_id: string
          status?: string
          treatment_code: string
        }
        Update: {
          amount?: number
          created_at?: string
          evidence_url?: string | null
          id?: string
          patient_id?: string
          status?: string
          treatment_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "smart_claims_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      weight_history: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          patient_id: string
          recorded_at: string
          recorded_by: string | null
          weight_kg: number
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          patient_id: string
          recorded_at?: string
          recorded_by?: string | null
          weight_kg: number
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          patient_id?: string
          recorded_at?: string
          recorded_by?: string | null
          weight_kg?: number
        }
        Relationships: [
          {
            foreignKeyName: "weight_history_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weight_history_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role:
        | "doctor"
        | "lab_tech"
        | "patient"
        | "researcher"
        | "insurance_admin"
        | "auditor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "doctor",
        "lab_tech",
        "patient",
        "researcher",
        "insurance_admin",
        "auditor",
      ],
    },
  },
} as const
