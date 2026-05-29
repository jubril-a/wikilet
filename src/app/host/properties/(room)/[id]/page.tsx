import { getPropertyRooms } from '@/src/features/property/actions';
import { notFound } from 'next/navigation';
import RoomMgmt from '../../../components/layout/RoomMgmt';

type RoomType = {
  id: string,
  roomType: string,
  capacity: string,
  basePrice: number
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const id = (await params).id
  const { data } = await getPropertyRooms(id);

  const extracted = data.rooms.map((room: RoomType) => ({
    id: room.id,
    type: room.roomType,
    capacity: room.capacity,
    price: room.basePrice
  }));

  return (
    <div className="max-w-306 mx-auto">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-2xl font-bold text-primary-1 mb-1">Room Management</h1>
            </div>
        </div>
        <RoomMgmt propertyId={id} rooms={extracted} />
        {extracted.length == 0 && <div className='max-w-fit mx-auto mt-8'>
          <h3 className='text-gray-600 text-xl font-bold text-center'>No rooms found for this property.</h3>
          <p className='text-sm text-gray-400 text-center'>Add your first room to start receiving bookings.</p>
        </div>}
    </div>
  );
}