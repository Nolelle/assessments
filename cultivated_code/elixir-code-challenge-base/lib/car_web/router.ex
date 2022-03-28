defmodule CarWeb.Router do
  use CarWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1", CarWeb do
    pipe_through :api
    
    resources "/rentals", RentalController, except: [:new, :edit] 
  end

  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
