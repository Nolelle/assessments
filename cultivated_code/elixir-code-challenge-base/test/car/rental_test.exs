defmodule Car.RentalTest do
  use Car.DataCase

  alias Car.Rental

  describe "cars" do
    alias Car.Rental.Cars

    import Car.RentalFixtures

    @invalid_attrs %{" name": nil, end_date: nil, model: nil, start_date: nil}

    test "list_cars/0 returns all cars" do
      cars = cars_fixture()
      assert Rental.list_cars() == [cars]
    end

    test "get_cars!/1 returns the cars with given id" do
      cars = cars_fixture()
      assert Rental.get_cars!(cars.id) == cars
    end

    test "create_cars/1 with valid data creates a cars" do
      valid_attrs = %{" name": "some  name", end_date: ~D[2022-03-20], model: "some model", start_date: ~D[2022-03-20]}

      assert {:ok, %Cars{} = cars} = Rental.create_cars(valid_attrs)
      assert cars. name == "some  name"
      assert cars.end_date == ~D[2022-03-20]
      assert cars.model == "some model"
      assert cars.start_date == ~D[2022-03-20]
    end

    test "create_cars/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Rental.create_cars(@invalid_attrs)
    end

    test "update_cars/2 with valid data updates the cars" do
      cars = cars_fixture()
      update_attrs = %{" name": "some updated  name", end_date: ~D[2022-03-21], model: "some updated model", start_date: ~D[2022-03-21]}

      assert {:ok, %Cars{} = cars} = Rental.update_cars(cars, update_attrs)
      assert cars. name == "some updated  name"
      assert cars.end_date == ~D[2022-03-21]
      assert cars.model == "some updated model"
      assert cars.start_date == ~D[2022-03-21]
    end

    test "update_cars/2 with invalid data returns error changeset" do
      cars = cars_fixture()
      assert {:error, %Ecto.Changeset{}} = Rental.update_cars(cars, @invalid_attrs)
      assert cars == Rental.get_cars!(cars.id)
    end

    test "delete_cars/1 deletes the cars" do
      cars = cars_fixture()
      assert {:ok, %Cars{}} = Rental.delete_cars(cars)
      assert_raise Ecto.NoResultsError, fn -> Rental.get_cars!(cars.id) end
    end

    test "change_cars/1 returns a cars changeset" do
      cars = cars_fixture()
      assert %Ecto.Changeset{} = Rental.change_cars(cars)
    end
  end
end
