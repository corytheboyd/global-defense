# Global Defense

We need your help to defend our planet, commander.

Our global defense network targeting system has fallen, and there is no time for repairs, the enemy is already here.</p>

Each of you will be assigned a part of the grid , and it is your task to tell us where to fire.</p>

We're counting on you, cadets. May god help us all.

# Grid

Space makes for a very large attack vector, making the task of defense quite a challenge.

Fear not cadets, that's why we have the grid. They may have taken down our targeting systems, but they can't stop us from organizing the old fashioned way.

## Grid Structure

You will be assigned a 8x8 grid:

|     | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `A` |     |     |     |     |     |     |     |     |
| `B` |     |     |     |     |     |     |     |     |
| `C` |     |     |     |     |     |     |     |     |
| `D` |     |     |     |     |     |     |     |     |
| `E` |     |     |     |     |     |     |     |     |
| `F` |     |     |     |     |     |     |     |     |
| `G` |     |     |     |     |     |     |     |     |
| `H` |     |     |     |     |     |     |     |     |

You have been assigned this grid because we know there to be enemy ships approaching within its bounds.

## Grid Quadrants

That's not all we've done to prepare the grid for you, cadet. We have also been able to make accurate predictions about what resides in each quadrant of your grid.

The quadrants are:

|     | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `A` | `Λ` | `Λ` | `Λ` | `Λ` | `Σ` | `Σ` | `Σ` | `Σ` |
| `B` | `Λ` | `Λ` | `Λ` | `Λ` | `Σ` | `Σ` | `Σ` | `Σ` |
| `C` | `Λ` | `Λ` | `Λ` | `Λ` | `Σ` | `Σ` | `Σ` | `Σ` |
| `D` | `Λ` | `Λ` | `Λ` | `Λ` | `Σ` | `Σ` | `Σ` | `Σ` |
| `E` | `Φ` | `Φ` | `Φ` | `Φ` | `Ω` | `Ω` | `Ω` | `Ω` |
| `F` | `Φ` | `Φ` | `Φ` | `Φ` | `Ω` | `Ω` | `Ω` | `Ω` |
| `G` | `Φ` | `Φ` | `Φ` | `Φ` | `Ω` | `Ω` | `Ω` | `Ω` |
| `H` | `Φ` | `Φ` | `Φ` | `Φ` | `Ω` | `Ω` | `Ω` | `Ω` |

We have been able to make the following guarantees about the contents of your quadrants:

- One quadrant contains a capital ship
- Any quadrant can contain bomber ships
- One quadrant contains nothing

Unfortunately, this is as granular as our tracking is able to get without our automated targeting system.

# Munitions

Our munitions are capable of acute localized self-guidance.

In layman's terms, that means you point them in roughly the right direction, and they deliver themselves to the target.

This is what allows us to use the grid system against the vastness of space.

## Munition Types

There are only two types of munition available to us, cadet:

1. **IDW** (Implosion Driver Warheads)
   - Chews through hulls. Once embedded, detonation destroys the target from the inside
   - A single IDW will take down a bomber with ease, but a capital ship will require two hits to destroy
2. **SPB** (Spectral Painting Beacons)
   - High-powered short-range sensors tag enemy ships on the grid for easy disposal with an IDW or two
   - Adjacent grid cells to the one the SPB is fired into report back estimated probability of that cell containing an enemy ship

## Munition Rationing

We must be careful to not over-spend on munitions to ensure that enough of a surplus is present to defend the entire global attack vector.

As such, you will be allotted a limited amount of munitions per shift.

The standard munitions assignment per grid per day is:

- 8 x [IDW](#Munition-Types)
- 3 x [SPB](#Munition-Types)

# Preparedness Simulation

You're almost ready to get to work cadet, but first we need to cover a simulation to prove you are ready for duty.

I had initialized the simulation, here we can see our grid and munitions interfaces loaded and ready for use:

|     | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `A` |     |     |     |     |     |     |     |     |
| `B` |     |     |     |     |     |     |     |     |
| `C` |     |     |     |     |     |     |     |     |
| `D` |     |     |     |     |     |     |     |     |
| `E` |     |     |     |     |     |     |     |     |
| `F` |     |     |     |     |     |     |     |     |
| `G` |     |     |     |     |     |     |     |     |
| `H` |     |     |     |     |     |     |     |     |

| `IDW` | `SPB` |
|-------|-------|
| `8`   | `3`   |

| `INPUTS` | `RESULTS` |
|----------|-----------|
| `NULL`   | `NULL`    |

We can either fire off a IDW blind, or send out an SPB to make a more educated guess with a subsequent IDW.

We will choose to fire off an SPB through the heart of `Λ` quadrant. Our interfaces update accordingly:

|     | `1`   | `2`   | `3`   | `4` | `5` | `6` | `7` | `8` |
|-----|-------|-------|-------|-----|-----|-----|-----|-----|
| `A` | `02%` | `03%` | `33%` |     |     |     |     |     |
| `B` | `19%` | `03%` | `01%` |     |     |     |     |     |
| `C` | `03%` | `25%` | `16%` |     |     |     |     |     |
| `D` |       |       |       |     |     |     |     |     |
| `E` |       |       |       |     |     |     |     |     |
| `F` |       |       |       |     |     |     |     |     |
| `G` |       |       |       |     |     |     |     |     |
| `H` |       |       |       |     |     |     |     |     |

| `IDW` | `SPB` |
|-------|-------|
| `8`   | `2`   |

| `INPUTS`            | `RESULTS`               |
|---------------------|-------------------------|
| `FIRE(SPB, B2)`     | `SCAN_RECT(A1, C3)`     |

A single SPB can only guarantee so much, but the scan of a second SPB will result in a triangulating effect that vastly improves targeting confidence.

Let's fire a second SPB to see this in effect.

|     | `1`   | `2`   | `3`   | `4` | `5` | `6` | `7` | `8` |
|-----|-------|-------|-------|-----|-----|-----|-----|-----|
| `A` | `02%` | `03%` | `33%` |     |     |     |     |     |
| `B` | `19%` | `03%` | `01%` |     |     |     |     |     |
| `C` | `01%` | `11%` | `82%` |     |     |     |     |     |
| `D` | `02%` | `01%` | `44%` |     |     |     |     |     |
| `E` | `03%` | `32%` | `06%` |     |     |     |     |     |
| `F` |       |       |       |     |     |     |     |     |
| `G` |       |       |       |     |     |     |     |     |
| `H` |       |       |       |     |     |     |     |     |

| `IDW` | `SPB` |
|-------|-------|
| `8`   | `1`   |

| `INPUTS`            | `RESULTS`              |
|---------------------|------------------------|
| `FIRE(SPB, B2)`     | `SCAN_RECT(A1, C3)`    |
| `FIRE(SPB, D2)`     | `SCAN_RECT(C1, E3)`    |

Notice that the probability of `C1` and `C2` decreased, while `C3` increased. More data yields higher accuracy.

We can now confidently fire a IDW to `C3`:

|     | `1`   | `2`   | `3`   | `4` | `5` | `6` | `7` | `8` |
|-----|-------|-------|-------|-----|-----|-----|-----|-----|
| `A` | `02%` | `03%` | `33%` |     |     |     |     |     |
| `B` | `19%` | `03%` | `01%` |     |     |     |     |     |
| `C` | `01%` | `11%` | `HHH` |     |     |     |     |     |
| `D` | `02%` | `01%` | `44%` |     |     |     |     |     |
| `E` | `03%` | `32%` | `06%` |     |     |     |     |     |
| `F` |       |       |       |     |     |     |     |     |
| `G` |       |       |       |     |     |     |     |     |
| `H` |       |       |       |     |     |     |     |     |

| `IDW` | `SPB` |
|-------|-------|
| `7`   | `1`   |

| `INPUTS`             | `RESULTS`            |
|----------------------|----------------------|
| `FIRE(SPB, B2)`      | `SCAN_RECT(A1, C3)`  |
| `FIRE(SPB, D2)`      | `SCAN_RECT(C1, E3)`  |
| `FIRE(IDW, C3)`      | `HIT(BOMBER)`        |

Looking good, we took out an enemy bomber using the power of the SPB.

What move should we make next cadet?

# Wait, what was that?!

There is no time to finish the simulation, your services are need on the front-lines immediately.

You have learned enough to know what you can do, now go out there and destroy some ships.

The world is counting on you.

God speed.
