## Event Management Web Application (Vue + Bootstrap) – Short Report

### 1) Overview
This assignment implements a responsive event management web application using Vue and Bootstrap. The website is organized into three main sections:

- **Responsive Content** (title/banner + “Why Choose Us?”)
- **Event Information** (searchable and filterable event table)
- **Registration Form** (user registration with dynamic event selection)

All required UI elements are built using Bootstrap’s grid system and components, while Vue is used to manage dynamic rendering, filtering, pagination, and form state.

### 2) Project Structure
The project follows the required folder layout:

- `framework/css/` – Bootstrap CSS and custom styling (`style.css`)
- `framework/js/` – Vue and Bootstrap JS plus the application logic (`app.js`)
- `A1/` – Main web page (`index.html`)

### 3) Responsive Content Section
At the top of the page, a navigation bar (Bootstrap navbar) provides quick links to each section (Home, Events, Register). A banner image is displayed under the navbar.

The “Why Choose Us?” section contains **six items** (each with a title and short description). The layout uses Bootstrap grid breakpoints:

- **Small screens**: 1 column (`col-12`)
- **Medium screens**: 2 columns (`col-md-6`)
- **Large screens**: 3 columns (`col-lg-4`)

### 4) Event Information Section (Searchable Table)
The Event Information section displays event data (Event ID, Event Name, Category, Duration Hours) and provides filtering options:

- Text search fields for **Event ID**, **Event Name**, and **Duration**
- Radio-button category filter: **Technology**, **Business**, **Marketing**, **Finance**, and **All**

To improve usability, the table includes **pagination**:

- Shows **5 rows per page**
- Includes **First / Previous / Next / Last** navigation
- Page numbers are displayed in a compact format using ellipses for large page counts
- Pagination automatically resets back to page 1 when filters/search values change

### 5) Registration Form Section
The registration form includes:

- Username input
- Password input
- Confirm password input with a live mismatch message
- Category selection radio buttons (default category is **Business** when the page loads)
- Event name dropdown that updates dynamically based on the selected category

After selecting an event name (and also on submit), a summary panel is displayed showing:

- Username
- Selected category
- Selected event name

### 6) Styling / UI Enhancements
A custom stylesheet (`framework/css/style.css`) was added to modernize the interface by improving typography, spacing, card/table styling, form appearance, and overall page aesthetics while still using Bootstrap as the base framework.

### 7) Vue Features Used
This web application uses Vue template directives and reactive features to keep the UI updated automatically:

- `v-model` for two-way binding of search filters and registration form inputs
- `v-for` for rendering repeated UI elements (event rows, dropdown options, pagination items)
- `v-if` for conditional display (password mismatch message, registration summary)
- `v-bind` (using `:` shorthand) for dynamic attributes/classes (e.g., active/disabled pagination states, unique keys)

In the JavaScript logic (`framework/js/app.js`):

- **computed properties** are used for derived data (filtered events, paginated events, total pages, dropdown options)
- **watchers** are used to react to changes (reset page to 1 on filter changes, update summary when event selection changes)
- **methods** are used for user actions (submit registration, change page, go to first/last page)

### 8) Conclusion
The final web application meets the assignment requirements by combining Bootstrap responsiveness with Vue-driven interactivity. Users can browse and filter events efficiently and register for events through a validated form with dynamic dropdown behavior.

