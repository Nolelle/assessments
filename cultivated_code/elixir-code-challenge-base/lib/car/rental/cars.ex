defmodule Car.Rental.Cars do
  use Ecto.Schema
  import Ecto.Changeset

  schema "cars" do
    field :name, :string, null: false
    field :end_date, :date
    field :model, :string, null: false
    field :start_date, :date

    timestamps()
  end

  @doc false
  def changeset(cars, attrs) do
    cars
    |> cast(attrs, [:" name", :model, :start_date, :end_date])
    |> validate_required([:" name", :model, :start_date, :end_date])
  end
end
