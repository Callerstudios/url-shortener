# URL Shortener API

A RESTful URL shortener built with **Node.js**, **Express**, and **MySQL**. It allows users to create short links that redirect to long URLs, with support for custom aliases and basic analytics.

## Features

* 🔗 Shorten long URLs
* ✨ Create custom short aliases
* 🚀 Fast URL redirection
* 📊 Track basic analytics (click count)
* 🗄️ MySQL database
* 🔒 Input validation and error handling
* 🌐 REST API

## Tech Stack

* Node.js
* Express.js
* MySQL
* Sequelize (or your ORM if applicable)
* JWT (if authentication is implemented)

## Getting Started

### Prerequisites

* Node.js 18+
* MySQL

### Installation

1. Clone the repository.

```bash
git clone https://github.com/<your-username>/url-shortener.git
cd url-shortener
```

2. Install dependencies.

```bash
npm install
```

3. Create a `.env` file.

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=url_shortener

BASE_URL=http://localhost:3000
```

4. Create the database.

```sql
CREATE DATABASE url_shortener;
```

5. Run the application.

```bash
npm run dev
```

Or for production:

```bash
npm start
```

## API Endpoints

| Method | Endpoint               | Description                  |
| ------ | ---------------------- | ---------------------------- |
| POST   | `/api/shorten`         | Create a short URL           |
| GET    | `/:shortCode`          | Redirect to the original URL |
| GET    | `/api/urls/:shortCode` | Get URL details              |
| DELETE | `/api/urls/:shortCode` | Delete a short URL           |

## Example Request

```http
POST /api/shorten
Content-Type: application/json

{
  "url": "https://example.com/very/long/url",
  "customAlias": "example"
}
```

## Example Response

```json
{
  "shortUrl": "http://localhost:3000/example",
  "originalUrl": "https://example.com/very/long/url"
}
```

## Project Structure

```
src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
└── app.js
```

## Future Improvements

* User authentication
* QR code generation
* Expiring links
* Password-protected URLs
* Detailed analytics dashboard
* Rate limiting
* Docker support

## License

This project is licensed under the MIT License.
