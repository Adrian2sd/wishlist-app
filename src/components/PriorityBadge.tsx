interface Props {
  priority: 'alta' | 'media' | 'baja';
}

const colors = {
  alta: 'bg-red-100 text-red-800',
  media: 'bg-yellow-100 text-yellow-800',
  baja: 'bg-green-100 text-green-800',
};

export const PriorityBadge = ({ priority }: Props) => (
  <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors[priority]}`}>
    {priority}
  </span>
);