defmodule Car.Repo.Migrations.CreateRentals do
  use Ecto.Migration

  def change do
    create table(:rentals) do
      add :name, :string
      add :model, :string
      add :start_date, :string
      add :end_date, :string

      timestamps()
    end
  end
end
