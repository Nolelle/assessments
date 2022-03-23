defmodule Car.Agency.Rental do
  use Ecto.Schema
  import Ecto.Changeset

  schema "rentals" do
    field :end_date, :date
    field :model, :string
    field :name, :string
    field :start_date, :date

    timestamps()
  end

  @doc false
  def changeset(rental, attrs) do
    rental
    |> cast(attrs, [:name, :model, :start_date, :end_date])
    |> validate_required([:name, :model, :start_date, :end_date])
  end
end
