/**
 * Bike class
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-11-03
 */

import Vehicle from './Vehicle'

class Bike extends Vehicle {
  private cadence = 0

  // Cadence Method
  getCadence(): number {
    return this.cadence
  }

  // Accelerate Method
  accelerate(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower
    super.setSpeed(this.cadence * 2)
  }

  // Ring Bell Method
  ringBell(): void {
    console.log('Ding ding!')
  }

  // Show Status
  status(): void {
    console.log(`  -> Speed: ${super.getSpeed()}
  -> MaxSpeed: ${super.getMaxSpeed()}
  -> Color: ${super.getColor()}
  -> Cadence: ${this.cadence}`)
  }

  // Export File
}
export = Bike
