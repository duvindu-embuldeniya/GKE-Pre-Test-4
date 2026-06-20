terraform {
  backend "gcs" {
    bucket      = "duvindu-test-bucket-1"
    prefix      = "terraform/state"
    credentials = "keys.json"
  }
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "7.33.0"
    }
  }
}

provider "google" {
  project     = var.project_id
  region      = var.region
  credentials = "keys.json"
}