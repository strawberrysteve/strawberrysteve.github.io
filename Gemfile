source "https://rubygems.org"

# Use Jekyll 3.9.0 (last Jekyll 3.x release compatible with Ruby 2.6)
gem "jekyll", "3.9.0"

# If you still want “github-pages” functionality, pin it to an older 213.x series
# (GitHub Pages 213.x uses Jekyll 3.9 under the hood). Otherwise, remove this line.
gem "github-pages", "213", group: :jekyll_plugins

# Pin plugins to versions that work with Jekyll 3.9 / Ruby 2.6:
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-redirect-from", "~> 0.16"
  gem "jemoji", "~> 0.10"
end

# WeBrick 1.8.x is required for Jekyll 3.9 on newer RubyGems:
gem "webrick", "~> 1.8"

# Any other libraries you need (pin them if they also drop Ruby 2.6 support):
gem "connection_pool", "2.5.0"

