module "network" {
  source = "./modules/network"

  vpc_name    = var.vpc_name
  subnet_name = var.subnet_name
  subnet_cidr = var.subnet_cidr
  region      = var.region
}

module "gce" {
  source = "./modules/gce"

  vm_name      = var.vm_name
  machine_type = var.machine_type
  zone         = var.zone
  image        = var.image
  disk_type    = var.disk_type
  disk_size    = var.disk_size

  vpc_name    = module.network.vpc_name
  subnet_name = module.network.subnet_name

  depends_on = [module.network]
}