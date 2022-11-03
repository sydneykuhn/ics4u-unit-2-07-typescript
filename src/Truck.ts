/**
 * Truck class
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-11-03
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  // Define Variable
  private licensePlate: string

  // Get Color, Plates, and Max Speed
  constructor(color: string, licensePlate: string, maxSpeed: number) {
    super(color, maxSpeed)
    this.licensePlate = licensePlate
  }

  // Return New Plate
  getLicensePlate(): string {
    return this.licensePlate
  }

  // License Plate Method
  setLicensePlate(licensePlateNew: string): void {
    this.licensePlate = licensePlateNew
  }

  // Air Pressure Method
  provideAir(airPressure: number): void {
    super.setSpeed(super.getSpeed() - airPressure / 2)

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }

  // Show Status
  status(): void {
    console.log(`  -> Speed: ${super.getSpeed()}
  -> MaxSpeed: ${super.getMaxSpeed()}
  -> Color: ${super.getColor()}
  -> License Plate: ${this.licensePlate}`)
  }
}

// Export File
export = Truck
