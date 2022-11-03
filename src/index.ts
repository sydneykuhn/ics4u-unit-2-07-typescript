/*
 * This program is a vehicle class.
 *
 * @author  Mr Coxall
 * @version 1.0
 * @since   2022-11-03
 */

import Truck from './Truck'
import Bike from './Bike'

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:')
bmx.status()

console.log('Set the cadence to 10')
bmx.accelerate(10)
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('\nRing bell.')
bmx.ringBell()

const bigTruck = new Truck('Grey', 'HGC-3456F', 200)

console.log('\nCreated a Truck.\nStatus:')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nApplied air pressure of 10:')
bigTruck.provideAir(10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nDone.')
