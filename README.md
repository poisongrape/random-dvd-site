# Summary

A sample website that displays DVDs.

# 3rd Party Libs Used

* create-react-app
  * I used it for speedy startup to begin developing asap.
* react-router-dom
  * Used to handle routing.
* Material UI
  * Access to component library with access to Emotion for styling.
* Redux
  * State management to keep track of DVDs, particularly for those added/deleted.
* Jest and Testing Library
  * Write unit tests (comes baked in with create-react-app).

# Assessment

I have met all the requirements stated in the doc that was sent to me.

There were a few requirements that were fuzzy to me. Had this been a real-world scenario, I would have asked for clarification from the product manager. These requirements were:
* >The Home page should show the following: Feature DVDs from the JSON
  * At first I read this as "the home page should feature *all* DVDs from the JSON. However, I later updated the app to only show DVDs that had their `feature` prop set to `true`. I would clarify this assumption with the PM to make sure it is correct.
* >The list should be sortable by category
  * This is fine when viewing all items in the list. However, the requirement does not seem to make much sense when filtering the list by category. I would clarify if this option should be disabled if we are filtering by category. Also, I programmed this sorting feature so that it first sorts by category, then sorts the titles alphabetically within each category.
* I would clarify if the list needs to persist between each session.
  * In its current state, the list refreshes when the browser is refreshed. I would seek clarification if this is fine or if we would want the list to persist (particularly for added/deleted titles).

If I had more time, I would have liked to add/improve the following:

* Use carousel display of DVDs on home page.
* Add Storybook integration to display components in sand box environment.
* Fine-tuned styling of UI/fix some styling issues, particularly when viewed in mobile mode.
  * Known issue where screen overflows on right side of screen. Looks like issue with animation and the styling of menu bar.
* Add category labels in List page when sorting by category.
* More unit tests.

## Regarding Unit Tests

I added a few unit tests in the app. Since this is not a real-world project, I felt adding a few unit tests was enough for this assessment. I focused on adding tests to show that I can write tests for:
* Covering functions such as reducers and util functions.
* Covering simple components, such as the Details Page.
* Covering complex components that rely on external modules, such as the DVD component.
