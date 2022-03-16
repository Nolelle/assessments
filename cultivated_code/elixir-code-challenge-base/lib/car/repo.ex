defmodule Car.Repo do
  use Ecto.Repo,
    otp_app: :car,
    adapter: Ecto.Adapters.Postgres
end
