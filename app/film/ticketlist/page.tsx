import TicketListView from "./ticketlist";

function TicketPage() {
  return (
    <div className="px-[120px] py-10">
      <div className="flex items-center mb-4 justify-center gap-4">
        <h1 className="text-2xl font-bold min-w-max ">TICKETS LIST</h1>
        <div className="flex w-full h-1 bg-black"></div>
      </div>
      <TicketListView />
    </div>
  );
}
export default TicketPage;
