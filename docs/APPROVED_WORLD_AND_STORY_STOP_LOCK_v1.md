# Super Zoos School Run — Approved World and Story-Stop Lock v1

Status: LOCKED DESIGN DIRECTION

## Approved visual reference
The user-approved school-town image is the visual and camera specification for the playable world.

Hard visual locks:
- Third-person camera directly behind Peter / Spider-Boy.
- Peter remains in the lower foreground, viewed from the rear.
- Camera is low enough to see forward down the road, not an aerial or top-down view.
- Wide three-lane road receding naturally toward the central Super Zoos School entrance.
- Vanishing point aligned to the school entrance.
- Buildings, trees, lamps, banners, benches, bins, hydrants and playgrounds remain outside the road corridor.
- The town must feel dimensional, polished, bright and welcoming.
- Road, sidewalks, curbs, grass and building setbacks must remain visually distinct.
- Foreground scenery may move past the camera but may never cross into a lane unless it is an intentional gameplay obstacle.

## Preserved gameplay systems
- Twelve-frame Spider-Boy rear run cycle.
- Three lane movement: left, centre, right.
- Full-screen swipe controls.
- Swipe left/right changes lane.
- Swipe up triggers the temporary run-frame hop.
- Fixed character scale and rear-facing camera identity.
- Score and status display.

## Environment implementation stages
1. Camera and road perspective.
2. Protected gameplay corridor and roadside boundaries.
3. Layered school-town buildings and campus depth.
4. Sidewalk, grass and roadside prop layers.
5. Parallax and forward-motion scrolling.
6. Obstacles placed only on lane centres.
7. Visual polish, lighting, shadows and ambient animation.

## Runner mode
Peter runs continuously through the school town, changes lanes, hops over hazards and travels toward changing destinations.

## Story-stop mode
At authored points, the runner can transition into a local interaction scene.

Required transition capability:
- Peter slows down.
- Peter stops safely.
- Peter turns toward the selected left-side or right-side location.
- The camera reframes the destination.
- Peter enters or approaches the location.
- The game switches from runner controls to interaction controls.
- After the encounter, Peter can return to the road and resume running.

Possible locations:
- Playground.
- Classroom or school building.
- Library.
- Sports field.
- Shop or community building.
- Garden.
- Character home.
- Science room.

Possible encounters:
- Meet a new friend.
- Talk with an existing character.
- Receive or give an item.
- Help someone solve a problem.
- Comfort a worried character.
- Resolve a disagreement.
- Encounter a bully and respond with courage, boundaries and kindness.
- Defend someone safely, then create an opportunity for reconciliation and friendship.
- Complete a small non-superhero task.
- Complete an optional superhero mission.

Tone lock:
- Not every encounter is about fighting or powers.
- Kindness, friendship, courage, empathy, problem-solving and reconciliation are core gameplay rewards.
- Conflict remains child-safe and story-driven.
- The player can succeed through compassionate choices as well as action.

## Architecture lock
The game must support two connected state families:

RUNNER
- RUNNING
- LANE_CHANGE
- HOPPING
- APPROACHING_STOP

STORY STOP
- STOPPED
- TURNING_TO_LOCATION
- ENTERING_LOCATION
- DIALOGUE
- CHOICE
- REWARD_OR_RESOLUTION
- RETURNING_TO_ROAD

Story stops must be data-driven so new locations and encounters can be added without rewriting the runner engine.

## Current production decision
Use the run-only hop for the present prototype. The six-frame jump artwork is deferred and is not required for environment, obstacle or story-stop development.
