import React from "react";

import { Card, Author, ReviewText } from "./styles";
import cutText from "../../util/cutText";

export default function ReviewCard({ details }) {
    return (
        <a href={details.url} target="_blank" rel="noreferrer">
            <Card>
                <ReviewText>{cutText(details.content, 400)}</ReviewText>
                <Author>&ndash; {details.author}</Author>
            </Card>
        </a>
    );
}
