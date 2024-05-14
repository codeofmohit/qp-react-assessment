# qp-react-assessment (design documentation - dev only)

React assessment repo for Question Pro - machine coding round

## Requirements:

1. Allow users to mark tasks as completed or incomplete by toggling checkboxes.
2. Ensure efficient performance and scalability to handle a large number of tasks (up to 10,000 items) without significant lag or slowdown.
3. Utilize TypeScript for type-checking and enhanced code quality.
4. Design and implement test cases to ensure the reliability and robustness of the application.

## Dev Flow (rough)

1. Initial Setup ✅

   - Project started | 14 May 2024 ✅
   - initial level planning for data layer & ui layer done | lld done ✅
   - boilerplate setup done via vite - react + ts ✅
   - tailwind css installation done ✅
   - added dependencies ✅
     - redux toolkit + react-redux
     - react-icons
     - uuid
   - setting up data layer ✅
     - set up types of task and taskList - /Types/index.ts
     - set up taskSlice for managing tasks - /Store/slices/tasksSlice.ts
     - set up redux store - /Store/store.ts
     - set up TS enabled hooks in replacement of useDispatch and useSelector - /Store/hooks.ts
     - providing store to the app
   - dark/light theme functionality via context done ✅

2. Functionality ✅

   - Task completion via checkBoxes done ✅
   - CRUD done ✅

3. Optimizations ✅

   - error handling added in form ✅
   - data persistence added via localStorage ✅
   - simultanious CRUD in localStorage to keep data uniformity ✅

4. Bug fixes ❌

- on marking down complete, after reloading, need to click 2 times to change
