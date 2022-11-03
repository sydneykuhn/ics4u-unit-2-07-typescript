/**
 * Vehicle Class
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-11-03
 */

class Vehicle {
  // Protected Variables
  private speed = 0
  private color: string
  private readonly maxSpeed: number

  // Get Color and Max Speed
  constructor(color: string, maxSpeed: number) {
    this.color = color
    this.maxSpeed = maxSpeed
  }

  // Return Color
  getColor(): string {
    return this.color
  }

  // Set color
  setColor(newColor: string) {
    this.color = newColor
  }

  // Set Speed
  setSpeed(newSpeed: number): void {
    this.speed = newSpeed
  }

  // Return Speed
  getSpeed(): number {
    return this.speed
  }

  // Max Speed Method
  getMaxSpeed(): number {
    return this.maxSpeed
  }

  // Acceleration Method
  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // Break Method
  brake(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

// Export File
export = Vehicle
