defmodule Car.Agency.Rental do
  use Ecto.Schema
  import Ecto.Changeset
  
  # @primary_key {:id, :binary_id, autogenerate: true}
  schema "rentals" do
    field :end_date, :string
    field :model, :string, null: false
    field :name, :string, null: false
    field :start_date, :string

    timestamps()
  end

  @doc false
  def changeset(rental, attrs) do
    rental
    |> cast(attrs, [:name, :model, :start_date, :end_date])
    |> validate_required([:name, :model, :start_date, :end_date])
  end
end
