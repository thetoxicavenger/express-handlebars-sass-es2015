# Setup

1. git clone into new local dir
2. git init
3. git add .
4. git commit -m "Initial Commit."
5. npm install

# Develop:

npm start && compass watch  --config config.rb sass/screen.scss

# Production:

uncomment UglifyJsPlugin code in webpack.config.js && $ webpack
