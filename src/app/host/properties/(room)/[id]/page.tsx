import { getProperty } from '@/src/features/property/actions';
import { notFound } from 'next/navigation';
import RoomMgmt from '../../../components/layout/RoomMgmt';

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const id = (await params).id
  const { data } = await getProperty(id);
  const property = data.property

  if (!property) notFound();

  return (
    <div className="max-w-306 mx-auto">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-2xl font-bold text-primary-1 mb-1">Room Management</h1>
            </div>
        </div>
        <RoomMgmt propertyId={id} />
    </div>
  );
}