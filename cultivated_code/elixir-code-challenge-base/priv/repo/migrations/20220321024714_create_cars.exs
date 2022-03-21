defmodule Car.Repo.Migrations.CreateCars do
  use Ecto.Migration

  def change do
    create table(:cars) do
      add :" name", :string
      add :model, :string
      add :start_date, :date
      add :end_date, :date

      timestamps()
    end
  end
end
