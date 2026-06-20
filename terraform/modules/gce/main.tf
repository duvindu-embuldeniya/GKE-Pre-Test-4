variable "vm_name" {}
variable "machine_type" {}
variable "zone" {}
variable "image" {}
variable "disk_type" {}
variable "disk_size" {}
variable "vpc_name" {}
variable "subnet_name" {}


resource "google_compute_instance" "vm" {
  name         = var.vm_name
  machine_type = var.machine_type
  zone         = var.zone

  boot_disk {
    initialize_params {
      image = var.image
      type  = var.disk_type
      size  = var.disk_size
    }
  }

  network_interface {
    network    = var.vpc_name
    subnetwork = var.subnet_name
    access_config {}
  }

  scheduling {
    provisioning_model  = "STANDARD"
    on_host_maintenance = "MIGRATE"
    automatic_restart   = true
  }
}

