import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

const Success = () => {
	const {
		query: { session_id },
	} = useRouter();

	const { data, error } = useSWR(
		() => `/api?checkout_sessions/${session_id}`,
		fetcher
	);

	useEffect(() => {
		if (data) {
			//shootFireworks!
		}
	}, [data]);

	return <div>Success</div>;
};

export default Success;
