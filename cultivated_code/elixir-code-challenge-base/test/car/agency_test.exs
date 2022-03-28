defmodule Car.AgencyTest do
  use Car.DataCase

  alias Car.Agency

  describe "rentals" do
    alias Car.Agency.Rental

    import Car.AgencyFixtures

    @invalid_attrs %{end_date: nil, model: nil, name: nil, start_date: nil}

    test "list_rentals/0 returns all rentals" do
      rental = rental_fixture()
      assert Agency.list_rentals() == [rental]
    end

    test "get_rental!/1 returns the rental with given id" do
      rental = rental_fixture()
      assert Agency.get_rental!(rental.id) == rental
    end

    test "create_rental/1 with valid data creates a rental" do
      valid_attrs = %{end_date: "some end_date", model: "some model", name: "some name", start_date: "some start_date"}

      assert {:ok, %Rental{} = rental} = Agency.create_rental(valid_attrs)
      assert rental.end_date == "some end_date"
      assert rental.model == "some model"
      assert rental.name == "some name"
      assert rental.start_date == "some start_date"
    end

    test "create_rental/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Agency.create_rental(@invalid_attrs)
    end

    test "update_rental/2 with valid data updates the rental" do
      rental = rental_fixture()
      update_attrs = %{end_date: "some updated end_date", model: "some updated model", name: "some updated name", start_date: "some updated start_date"}

      assert {:ok, %Rental{} = rental} = Agency.update_rental(rental, update_attrs)
      assert rental.end_date == "some updated end_date"
      assert rental.model == "some updated model"
      assert rental.name == "some updated name"
      assert rental.start_date == "some updated start_date"
    end

    test "update_rental/2 with invalid data returns error changeset" do
      rental = rental_fixture()
      assert {:error, %Ecto.Changeset{}} = Agency.update_rental(rental, @invalid_attrs)
      assert rental == Agency.get_rental!(rental.id)
    end

    test "delete_rental/1 deletes the rental" do
      rental = rental_fixture()
      assert {:ok, %Rental{}} = Agency.delete_rental(rental)
      assert_raise Ecto.NoResultsError, fn -> Agency.get_rental!(rental.id) end
    end

    test "change_rental/1 returns a rental changeset" do
      rental = rental_fixture()
      assert %Ecto.Changeset{} = Agency.change_rental(rental)
    end
  end
end
