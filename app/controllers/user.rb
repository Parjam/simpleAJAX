get '/' do
  erb :homepage
end

get '/user/:id' do
  user = User.where(id: params[:id])
  unless user.empty?
    content_type :json
    return {name: user[0].name}.to_json
  end
end
