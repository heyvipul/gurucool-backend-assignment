## Flow Distribution Algorithm

### 1. Design Algorithm:
* The algorithm aims to distribute users to astrologers in a fair and balanced manner.
* It includes a mechanism to toggle the flow for top astrologers, allowing them to receive more or fewer connections as desired.
### 2. Implementation:
* The algorithm is implemented in the flowDistributionService module.
* The connectUserToTopAstrologer function connects a user to the top astrologer based on their flow adjustment.
### 3. API Design:
``
POST /api/astrologers: Create a new astrologer.
``

``
GET /api/astrologers: Fetch all astrologers.
``

``
PUT /api/astrologers/:id/settings: Update flow adjustment for a specific astrologer.
``

``
POST /api/users: Create a new user.
``

``
GET /api/user: Fetch all users.
``

### 4. Backend Implementation:
* Backend logic is developed using Node.js and Express.js.
* Folder structure includes models, controllers, middleware, and routes.
* astrologerModel.js and userModel.js define schemas for astrologers and users respectively.
* astrologerController.js and userController.js handle requests related to astrologers and users.
* flowDistributionService.js contains the algorithm for distributing users to astrologers.
