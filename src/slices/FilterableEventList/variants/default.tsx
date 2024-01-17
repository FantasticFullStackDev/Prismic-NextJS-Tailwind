"use client"
import React, { useEffect, useState } from "react"
import { gql, useQuery } from "@apollo/client";
import { apolloClient } from "@/prismicio";
import LoadingPlaceHolder from "@/common/loadingPlaceholder";
import { PrismicImage } from "@prismicio/react";

enum SortEventcardy {
	title_asc = "title_ASC",
	title_desc = "title_DESC"
}

const GET_CARDS = gql`
  query GetCards(
	$searchTerm: String!
	$sortBy: SortEventcardy!
) {
    allEventcards (
		where: {
			title_fulltext: $searchTerm
		},
		sortBy: $sortBy
	) {
      edges {
        node {
          title
          description
          image
        }
      }
    }
  }
`;

const FilterableEventListDefaultVariant = ({ primary, items }: any): JSX.Element => {

	
	const { loading, error, data, refetch } = useQuery(GET_CARDS, {
		variables: { 
			searchTerm : "",
			sortBy: SortEventcardy.title_asc
		},
		client: apolloClient,
		notifyOnNetworkStatusChange: true
	});

	const [cards, set_cards] = useState<any>([])
	const [text, set_text] = useState('')
	const [filter, set_filter] = useState('')

	// const fetchCards = async (filter: any) => {
	// 	const query = prismic.filter.fulltext('my.eventcard.title', filter);
	// 	const res = await client.get({
	// 		filters: [prismic.filter.at('document.type', 'eventcard')],
	// 		predicates: query
	// 	});
	// 	set_cards([...res.results])
	// 	console.log(res.results, '/////')
	// }

	useEffect(() => {
		refetch({
			searchTerm: filter
		})
	}, [filter])

	useEffect(() => {
		if (!loading) {
			console.log(data, '////')
			set_cards(data?.allEventcards?.edges || [])
		}
	}, [loading])

	return (
		<div className="container py-14 text-typo-primary">
			<div className="flex items-center justify-between">
				<div className="text-[40px] font-medium leading-[102%] uppercase">
					{primary.title}
				</div>
				<div className="relative">
					<input
						value={text}
						onChange={(e) => {
							let temp = e.target.value.replace(/[^a-zA-Z0-9\s]/g, "");
							if (temp.trim() !== "") {
								set_text(temp);
							} else {
								set_text("");
							}
							if (e.target.value === "") {
								set_filter(e.target.value);
							}
						}}
						onKeyUp={(e: any) => {
							if (e.key === "Enter") set_filter(e.target.value);
						}}
						placeholder="Input filter text"
						className="p-3 w-full max-w-[400px] border-2 border-solid border-green rounded-md pr-8"
					/>
					<button
						className="absolute top-3 end-3 text-green"
						onClick={() => set_filter(text)}
					>
						<svg
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.5734 18.059C14.7135 18.059 18.0697 14.7028 18.0697 10.5627C18.0697 6.42261 14.7135 3.06641 10.5734 3.06641C6.43335 3.06641 3.07715 6.42261 3.07715 10.5627C3.07715 14.7028 6.43335 18.059 10.5734 18.059Z"
								stroke="currentColor"
								strokeWidth="1.40556"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M19.9462 19.9335L15.8701 15.8574"
								stroke="currentColor"
								strokeWidth="1.40556"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="flex flex-wrap gap-10 justify-center mt-10">
				{
					loading ? 
						Array(3).fill(0).map((item:any, index:number) => (
							<div key={index} className="w-[400px]">
								<div className="w-full h-[300px]">
									<LoadingPlaceHolder
										extraStyles={{ height: "100%", borderRadius: 10 }}
									/>
								</div>
								<div className="w-full h-8 mt-4">
									<LoadingPlaceHolder
										extraStyles={{ height: "100%", borderRadius: 10 }}
									/>
								</div>
								<div className="w-full h-20 mt-4">
									<LoadingPlaceHolder
										extraStyles={{ height: "100%", borderRadius: 10 }}
									/>
								</div>
							</div>
						)) : 
						cards?.length ?
							cards?.map ((item:any, index:number) => (
								<div key={index} className="w-full max-w-[400px]">
									<PrismicImage field={item.node?.image} className="w-full h-[300px] object-cover object-center"/>
									<div className="text-2xl font-bold mt-4">{item.node?.title}</div>
									<div className="mt-4">{item.node?.description}</div>
								</div>
							)) :
							<div className="text-3xl mt-8">No Events Found</div>
					
				}
			</div>
		</div>
	);
};

export default FilterableEventListDefaultVariant;
