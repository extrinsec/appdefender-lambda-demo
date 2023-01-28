require 'json'
require 'uri'
require 'net/http'

def demo_ruby(event:, context:)
    url = "https://www.google.com"
    Net::HTTP.get_response(URI(url))
    { event: JSON.generate(event), context: JSON.generate(context.inspect) }
end