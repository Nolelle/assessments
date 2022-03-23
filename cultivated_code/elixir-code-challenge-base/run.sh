mix deps.get
mix ecto.create
mix ecto.migrate
iex -S mix phx.server